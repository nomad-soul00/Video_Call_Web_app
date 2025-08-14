const express = require("express");
const app = express();

const server = require('http').createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
    cors : {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => { 
    socket.emit('me', socket.id);

    socket.on('disconnect', () =>{
        socket.broadcast.emit("call ended    ")
    });

    socket.on("calluser", ({ userToCall, signalData, from, name})=>{
        io.to(userToCall).emit("calluser", {signal: signalData, from, name});
    });

    socket.on("answercall", (data)=>{
        io.to(data.to).emit("callaccepted", data.signal);
    })

 });

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("Hello world")
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})