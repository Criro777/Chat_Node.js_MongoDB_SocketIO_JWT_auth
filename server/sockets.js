"use strict";

module.exports = io => {
    io.on('connection', function (socket) {
        socket.emit('connected', "You are connected");
        socket.join('all');
        socket.on('msg', (content, user) => {
            const obj = {
                date: new Date(),
                content: content,
                username: user
            };
                socket.emit('message', obj);
                socket.to('all').emit('message', obj);
            });
        });
    };
