const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io')
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    console.log('new connection');
    socket.on('chat', (mes)=>{
        io.sockets.emit('user-chat', mes);
    })
})

server.listen(80, ()=>{
    console.log('listening on port 80');
});
