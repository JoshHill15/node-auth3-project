const router = require("express").Router();
const Users = require("./models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./secrets")
const restricted = require("./restrictedMiddleware")


const userPermissions = permission => (req,res,next) => {
    if (req.user && req.user.role && req.user.role.toLowerCase() === permission) next()
    else res.status(403).json({error: "incorrect permission"})
}

router.get("/", restricted, userPermissions("admin"), async (req, res) => {
  const users = await Users.find();
  if (users) res.status(200).json(users);
  else res.status(500).json({ error: "can't connect to users" });
});

router.post("/register", async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 8);
  req.body.password = hash;
  const newUser = await Users.add(req.body);
  if (newUser) {
    res.status(201).json(newUser);
  } else res.status(500).json({ error: "can't add user" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findBy({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = signToken(user)
    res.status(200).json({message: `${user.username} is now logged in and has token ${token}`});
  }
  else res.status(401).json({error: "invalid creds"})
});


function signToken(user){
    const payload = {
        user
    }
    const options = {
        expiresIn: "12h"
    }
    return jwt.sign(payload, jwtSecret, options)
}

// function userPermissions(permission){
//     return function (req,res,next){
//         console.log("userrrrrrrr", req.user)
//         if (req.user && req.user.role && req.user.role.toLowerCase() === permission) next()
//         else res.status(403).json({error: "wrong permissions"})
//     }
// }

module.exports = router;
