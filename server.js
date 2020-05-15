const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);

let players = [];

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);
    players.push(socket.id);

    if (players.length > 0) {
        io.emit('newPlayer', players.length - 1);
    }

    socket.on('dealCards', function () {
        io.emit('dealCards');
    });

    socket.on('cardPlayed', function (gameObject, playerId) {
        io.emit('cardPlayed', gameObject, playerId);
    });

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
        players = players.filter(player => player !== socket.id);
    });
});

http.listen(3000, function () {
    console.log('Server started!');
});
