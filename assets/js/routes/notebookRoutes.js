"use strict";
var express = require("express");
var notebookRouter = express.Router();
var routerNotebook = function (nav) {
    notebookRouter.route('/')
        .get(function (req, res) {
        res.render('index', {
            title: 'Notebook',
            navLinks: nav
        });
    });
    notebookRouter.route('/add-entry')
        .get(function (req, res) {
        res.render('addEntry', {
            title: 'Add Entry',
            navLinks: nav
        });
    });
    return notebookRouter;
};
module.exports = routerNotebook;
