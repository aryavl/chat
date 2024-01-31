// import { Server } from 'socket.io';
// import http from 'http'
// const server = http.createServer();
// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:3000', // Replace with your client's URL
//   },
// });

// let activeUsers = [];
// let activeChats = {}; // Store active chats

// io.on('connection', (socket) => {
//   socket.on('new-user-add', (newUserId) => {
//     if (!activeUsers.some((user) => user.userId === newUserId)) {
//       activeUsers.push({
//         userId: newUserId,
//         socketId: socket.id,
//       });
//     }
//     io.emit('get-users', activeUsers);
//   });

//   socket.on('disconnect', () => {
//     activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
//     io.emit('get-users', activeUsers);
//   });

//   socket.on('join-chat', (chatId) => {
//     socket.join(chatId);
//   });

//   socket.on('send-message', (data) => {
//     const { chatId, senderId, text } = data;

//     // Save the message to the active chat
//     if (!activeChats[chatId]) {
//       activeChats[chatId] = [];
//     }
//     const message = {
//       senderId,
//       text,
//     };
//     activeChats[chatId].push(message);
//     console.log(activeChats,"active chats");
//     // Broadcast the message to everyone in the chat room
//     io.to(chatId).emit('receive-message', message);
//   });
// });

// server.listen(8800, () => {
//   console.log('Socket.IO server running on port 8800');
// });

import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

let activeUsers = [];
let activeChats = {}; // Store active chats

io.on('connection', (socket) => {
  socket.on('new-user-add', (newUserId) => {
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({
        userId: newUserId,
        socketId: socket.id,
      });
    }
    io.emit('get-users', activeUsers);
  });

  socket.on('disconnect', () => {
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    io.emit('get-users', activeUsers);
  });

  socket.on('join-chat', (chatId) => {
    socket.join(chatId);
  });

  socket.on('send-message', (data) => {
    const { chatId, senderId, text } = data;

    // Save the message to the active chat
    if (!activeChats[chatId]) {
      activeChats[chatId] = [];
    }
    const message = {
      senderId,
      text,
    };
    activeChats[chatId].push(message);

    // Broadcast the array of messages to everyone in the chat room
    io.to(chatId).emit('receive-message', activeChats[chatId]);
  });
});

httpServer.listen(8800, () => {
  console.log('Socket.IO server running on port 8800');
});
