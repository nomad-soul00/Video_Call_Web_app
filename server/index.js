const {Server} = require("socket.io");

const io = new Server(8000, {
     cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket)=>{
    console.log(`socket connected: ${socket.id}`);
})

