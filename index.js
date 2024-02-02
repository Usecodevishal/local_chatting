
const http = require("http");
const express = require("express");
const path = require("path");
const {Server} = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("user-chat", (chat) => {
      io.emit("mes>>>", chat);
    })
})

app.use(express.static(path.resolve("./public")));

app.get("/", (res, req) => {
    return res.sendFile("/public/index.html");
})

server.listen(5000, () => console.log("server started on PORT:5000"));