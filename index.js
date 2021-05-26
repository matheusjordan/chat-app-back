const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const socketServer = new Server(server, {
    cors: {
        origin: '*',
        methods: ['*']
    }
});

socketServer.on('connection', (socket) => {
    console.log(':) ', `conectado ${socket.id}`)

    socket.on('message', (data) => {
        socketServer.emit('newMessages', data);
    })
})

server.listen('9000', () => {
    console.log('Servidor online na porta 9000');
});