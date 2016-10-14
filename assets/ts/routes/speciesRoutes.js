"use strict";
var express = require("express");
var speciesRouter = express.Router();
var routerSpecies = function (nav) {
    speciesRouter.route('/')
        .get(function (req, res) {
        res.render('species', {
            title: 'Notebook',
            navLinks: nav
        });
    });
    speciesRouter.route('/single')
        .get(function (req, res) {
        res.render('addEntry', {
            title: 'Add Entry',
            navLinks: nav
        });
    });
    return speciesRouter;
};
module.exports = routerSpecies;
