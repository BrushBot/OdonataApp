"use strict";
var express = require("express");
var userRouter = express.Router();
var routerUser = function (nav) {
    userRouter.route('/')
        .get(function (req, res) {
        res.render('userProfile', {
            title: 'User',
            navLinks: nav
        });
    });
    return userRouter;
};
module.exports = routerUser;
