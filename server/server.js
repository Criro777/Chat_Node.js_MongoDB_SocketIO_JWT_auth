"use strict";

const express = require('express');
const app = express();
const server = require('http').Server(app);



server.listen(3000, function () {
    console.log('server started on port:3000');
});