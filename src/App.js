import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup, Browse } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.SIGN_IN} element={<Signin />} />
				<Route path={ROUTES.SIGN_UP} element={<Signup />} />
				<Route path={ROUTES.BROWSE} element={<Browse />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
