import * as express from "express";
import {INavLink} from "../app";

let speciesRouter = express.Router();

let routerSpecies = function(nav: INavLink[]) {

	speciesRouter.route('/')
		.get(function(req: any, res: any) {
			res.render('species', {
				title: 'Notebook',
				navLinks: nav
			});
		});

	speciesRouter.route('/single')
		.get(function(req: any, res: any) {
			res.render('addEntry', {
				title: 'Add Entry',
				navLinks: nav
			});
		});

	return speciesRouter;

};

module.exports = routerSpecies;