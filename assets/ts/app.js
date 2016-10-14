"use strict";
var express = require("express");
var app = express();
var port = process.env.PORT || 6682;
var nav = [{
        Link: '/user', Text: 'My Profile'
    }, {
        Link: '/species', Text: 'Species'
    }];
var speciesRouter = require('./routes/speciesRoutes')(nav);
var userRouter = require('./routes/userRoutes')(nav);
var notebookRouter = require('./routes/notebookRoutes')(nav);
app.use(express.static('assets'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/', notebookRouter);
app.use('/species', speciesRouter);
app.use('/user', userRouter);
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
