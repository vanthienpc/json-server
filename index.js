const jsonServer = require("json-server");
const store = require("./store.js");
const fs = require("fs");

const server = jsonServer.create();
const database = "/tmp/db.json";

fs.writeFileSync(database, JSON.stringify(store()));

const router = jsonServer.router(database);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);
server.listen(port, function() {
	console.log(`JSON Server is running on http://localhost: ${port}`);
});
