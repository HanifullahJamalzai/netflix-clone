import React from "react";
import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup } from "./pages";

function App() {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.SIGN_IN} element={<Signin />} />
			<Route path={ROUTES.SIGN_UP} element={<Signup />} />
			<Route
				path={ROUTES.BROWSE}
				element={<h1>I will be the browse page</h1>}
			/>
		</Routes>
	);
}

export default App;
