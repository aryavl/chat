import { Server } from 'socket.io';

const io = new Server(8800, {
  cors: {
    origin: "http://localhost:3000"
  }
});

let activeUsers = []

io.on("connection",(socket)=>{
    // register new user to socket server
    // on method is used when we need to add something from the other side--> other side to socket communication
    socket.on("new-user-add",(newUserId)=>{
        // if user is not added previously
        if(!activeUsers.some(user=>user.userId === newUserId)){
            activeUsers.push({
                userId:newUserId,
                socketId:socket.id
            })
        }
        // emit method is used when we need to send something to the other side ---> socket to other side communication
        console.log("Connected users",activeUsers);
        io.emit('get-users',activeUsers)
    })

    socket.on("disconnect",()=>{
        activeUsers = activeUsers.filter(user=>user.socketId !== socket.id)
        console.log("user disconnected",activeUsers);
        io.emit('get-users',activeUsers)

    })
})