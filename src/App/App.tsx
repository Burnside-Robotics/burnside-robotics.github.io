import React from "react-dom";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Home from "./home";
import { Login } from "./UserArea/login";
import { Error404 } from "./404";
import { UserArea } from "./UserArea/userArea";
export const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/home" component={() => <Redirect to="/" />} />
				<Route path="/login" component={Login} />
				<Route
					path={["/user", "/blogs", "/manage", "/notebooks"]}
					component={UserArea}
				/>
				<Route path="/404" component={Error404} />
				<Redirect to="/404" />
			</Switch>
		</Router>
	);
};
