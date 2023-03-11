const sendButton = document.getElementById('sendButton')
const messageText = document.getElementById('messageText')
const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', (event) => {
  socket.send('Hello server!');
});

socket.addEventListener('message', (event) => {
  console.log('Server says: ', event.data);
});

function sendMessage(message) {
  socket.send(message);
}

sendButton.addEventListener('click', (e)=>{
    e.preventDefault()
    if (messageText.value != '') {
        sendMessage(messageText.value)
        messageText.value = '';
        console.log('sent!');
    }
})