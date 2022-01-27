const express = require("express");
const cors = require("cors")
const cookies = require("cookie-parser");
const port = 8000;
const app = express();
const server = app.listen(port, ()=>console.log(`Listening on port ${port}... `))

const io = require("socket.io")(server, { cors : true })
app.use(cors({
    credentials:true,
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(cookies());


require("./server/config/mongoose.config")()
require("./server/routes/routes")(app)
io.on("connection", socket => {
    console.log(`User connected ${socket.id}`);

    socket.on('join_room', (room) => {
        socket.join(room)
        console.log(`User with ID: ${socket.id} joined room: ${room}`);
    })
    socket.on('send_message', ( data ) => {
        console.log(data);
        socket.to(data.room).emit('receive_message', data)
    })
    socket.on("disconnect", () => {
        console.log(`User Disconnected ${socket.id}`);
    })
})