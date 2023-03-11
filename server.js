const express = require('express');
const WebSocket = require('ws');

const PORT = 3000;

const app = express();
const server = require('http').createServer(app);
const ws = new WebSocket.Server({ server });

app.use(express.static('./public'));

ws.on('connection', (socket) => {
  socket.send('Welcome to the chat room!');

  socket.on('message', (message) => {
    for (const client of ws.clients) {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(`Client: ${message}`);
        console.log(`Client: ${message}`);
      }
    }
  });
});

server.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});