import React from "react";
import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/Home";
function App() {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route
				path={ROUTES.BROWSE}
				element={<h1>I will be the browse page</h1>}
			/>
			<Route
				path={ROUTES.SIGN_IN}
				element={<h1>I will be the sign in page</h1>}
			/>
			<Route
				path={ROUTES.SIGN_UP}
				element={<h1>I will be the sign up page</h1>}
			/>
		</Routes>
	);
}

export default App;
