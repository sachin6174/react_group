const socket = io('http://localhost:8000');

/*
TIME SETUP
 */
function getTime(){
    let currentTime = new Date();

    // Extract hour, minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds; 
    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour==0) ?  12 : currentHour;
    let timeOfDay = (currentHour > 12 ) ? "AM" : "PM";
    
    // Prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes  
                        + ":" + currentSeconds + " " + timeOfDay;
    return currentTimeStr;                     
}



// Get DOM elements in respective Js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")

// Audio that will play on receiving messages
var audio = new Audio('frontend/audio/ting.mp3');

// Function which will append event info to the contaner
const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position =='left'){ 
        audio.play();
    }
}


// Ask new user for his/her name and let the server know
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

// If a new user joins, receive his/her name from the server
socket.on('user-joined', name =>{
    let currentTimeStr=getTime();
    append(`${name} joined the chat at ${currentTimeStr} `, 'right')
})

// If server sends a message, receive it
socket.on('receive', data =>{
    let currentTimeStr=getTime();
    append(`${data.name  } ${  currentTimeStr}  : ${data.message}`, 'left')
})

// If a user leaves the chat, append the info to the container
socket.on('left', name =>{
    append(`${name} left the chat`, 'right')
})

// If the form gets submitted, send server the message
form.addEventListener('submit', (e) => {

    let currentTimeStr=getTime();
    e.preventDefault();
    const message = messageInput.value;
    append(`You ${currentTimeStr}  : ${message } `, 'right');
    socket.emit('send', message);
    messageInput.value = ''
})