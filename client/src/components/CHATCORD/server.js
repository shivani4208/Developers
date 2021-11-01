const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
    userJoin,
    getCurrentUser,
    getRoomUsers,
    userLeave
} = require('./utils/user.js');


const app = express();
const server = http.createServer(app);
const io = socketio(server);
//Set static folder

app.use(express.static(path.join(__dirname,'public')));
const botName = "ChatCord Bot";
//Run when client connects

io.on('connection',socket => {
    
socket.on('joinRoom',({username,room}) =>{

    const user = userJoin(socket.id,username,room);

    socket.join(user.room);
//Welcome to new user
socket.emit('message',formatMessage(botName,'Welcome to ChatBoard'));


//Runs when a user connect
socket.broadcast
.to(user.room)
.emit('message',formatMessage(botName,`${user.username} has joined the chat`));

//send users and room info
io.to(user.room).emit('roomUsers',{
    room : user.room,
    users : getRoomUsers(user.room)
});

});


//Listen for Chat Message 
socket.on('chatMessage',msg =>{
    const user = getCurrentUser(socket.id);
io.to(user.room).emit('message',formatMessage(user.username,msg));
});

//runs when a user disconnect
socket.on('disconnect', ()=>{
    const user = userLeave(socket.id);
    if(user){
        io.to(user.room).emit('message',formatMessage(botName,`${user.username} has left the chat`));
      //send users and room info
io.to(user.room).emit('roomUsers',{
    room : user.room,
    users : getRoomUsers(user.room)
});
    }
  
});


});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));