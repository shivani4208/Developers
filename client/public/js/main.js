const chatForm = document.getElementById('chat-form');
const chatMessage = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users'); 

//Get username and room url
const {username,room} = Qs.parse(location.search,{
    ignoreQueryPrefix : true
});


const socket = io();


//Joint ChatRoom
socket.emit('joinRoom',{username,room});

//get room user
socket.on('roomUsers',({users,room})=>{
outputRoomName(room);
outputUsers(users);
});
//Message from Server
socket.on('message',message =>{
    console.log(message);
   outputMessage(message);

   //Scroll Down
   chatMessage.scrollTop = chatMessage.scrollHeight;
});

//Message submit
chatForm.addEventListener('submit',e=>{

e.preventDefault();

//get a message text
const  msg = e.target.elements.msg.value;

//emit message to server
socket.emit('chatMessage',msg);

//Clear Input
e.target.elements.msg.value = '';
e.target.elements.msg.focus();
});

//Output message DOM
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}

//add room name to DOM
function outputRoomName(room){
    roomName.innerText = room;
}

//add user to DOM
function outputUsers(users){
    userList.innerHTML = `
    ${users.map(user => `<li>${user.username} </li>`).join('')}
    `;
}