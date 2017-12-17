"use strict";

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {serverClient: true});
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');

nunjucks.configure('./client/views', {
    autoescape: true,
    express: app
});

mongoose.connect('mongodb://localhost:27017/chat', {useMongoClient: true});
mongoose.Promise = require('bluebird');
mongoose.set('debug', true);

require('./sockets')(io);
require('./router')(app);


server.listen(3000, function () {
    console.log('server started on port:3000');
});