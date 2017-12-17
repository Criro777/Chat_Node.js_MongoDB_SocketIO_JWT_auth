"use strict";

const express = require('express');

module.exports = app => {
    app.use('/assets', express.static('./client/public'));

    app.get('/', (req, res) => {
        res.render('index.html');
    });
}
