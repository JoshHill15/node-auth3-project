const server = require("./api/server")
const PORT = process.env.PORT || 4200

server.listen(PORT, () => console.log(`listening on ${PORT}`))