const db = require("../dbConfigure")

module.exports = {
    find,
    findBy,
    findById,
    add
}

function find(){
    return db("users")
}

function findBy(filter){
    return db("users").where(filter).first()
}

function findById(id){
    return db("users").where({ id }).first()
}

function add(body){
    return db("users").insert(body).then(([id]) => findById(id)) //destructuring array
}