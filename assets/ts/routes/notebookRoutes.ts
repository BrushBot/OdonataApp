import * as express from "express";
import {INavLink} from "../app";

let notebookRouter = express.Router();

let routerNotebook = function(nav: INavLink[]) {

	notebookRouter.route('/')
		.get(function(req: any, res: any) {
			res.render('index', {
				title: 'Notebook',
				navLinks: nav
			});
		});

	notebookRouter.route('/add-entry')
		.get(function(req: any, res: any) {
			res.render('addEntry', {
				title: 'Add Entry',
				navLinks: nav
			});
		});

	return notebookRouter;

};

module.exports = routerNotebook;