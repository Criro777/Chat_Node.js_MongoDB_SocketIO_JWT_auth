"use strict";

const express = require('express');
const passport = require('passport');

function checkAuth(req, res, next) {
    passport.authenticate('jwt', {session: false}, (err, decryptToken, jwtError) => {
        if (jwtError != void(0) || err != void(0)) return res.render('index.html', {error: err || jwtError});
        req.user = decryptToken;
        next();
    })(req, res, next);
}

module.exports = app => {
    app.use('/assets', express.static('./client/public'));

    app.get('/', checkAuth, (req, res) => {
        res.render('index.html', {username: req.user.username});
    });
}
