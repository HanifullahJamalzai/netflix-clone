import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup, Browse } from "./pages";
import { useAuthListener } from "./hooks";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

function App() {
	const { user } = useAuthListener();
	return (
		<BrowserRouter>
			<Routes>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.HOME}
					element={<Home />}
				/>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_IN}
					element={<Signin />}
				/>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_UP}
					element={<Signup />}
				/>
				<ProtectedRoute user={user} path={ROUTES.BROWSE} element={<Browse />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
