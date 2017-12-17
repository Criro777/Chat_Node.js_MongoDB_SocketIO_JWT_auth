"use strict";

const express = require('express');
const app = express();
const server = require('http').Server(app);
const nunjucks = require('nunjucks');

nunjucks.configure('./client/views', {
    autoescape: true,
    express: app
});
require('./router')(app);


server.listen(3000, function () {
    console.log('server started on port:3000');
});