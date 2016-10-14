import * as express from "express";
import {INavLink} from "../app";

let userRouter = express.Router();

let routerUser = function(nav: INavLink[]) {

	userRouter.route('/')
		.get(function(req: any, res: any) {
			res.render('userProfile', {
				title: 'User',
				navLinks: nav
			});
		});

	return userRouter;

};


module.exports = routerUser;