import * as express from "express";

let app = express();

let port = process.env.PORT || 6682;

export interface INavLink {
	Link: string;
	Text: string;
}

let nav: INavLink[] = [{
	Link: '/user', Text: 'My Profile'
}, {
	Link: '/species', Text: 'Species'
}];

let speciesRouter = require('./routes/speciesRoutes')(nav);

let userRouter = require('./routes/userRoutes')(nav);

let notebookRouter = require('./routes/notebookRoutes')(nav);

app.use(express.static('assets'));

app.set('views', './views');

app.set('view engine', 'ejs');

app.use('/', notebookRouter);

app.use('/species', speciesRouter);

app.use('/user', userRouter);

app.listen(port, function(err: string) {
	console.log('running server on port ' + port);
});