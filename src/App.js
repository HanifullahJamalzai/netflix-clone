import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/browse" element={<h1>I will be the browse page</h1>} />
			<Route path="/signin" element={<h1>I will be the sign in page</h1>} />
			<Route path="/signup" element={<h1>I will be the sign up page</h1>} />
		</Routes>
	);
}

export default App;
