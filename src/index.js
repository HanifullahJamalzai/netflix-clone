import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./contexts/firebase";

// import { seedDatabase } from "./seed";

const firebaseConfig = {
	apiKey: "AIzaSyBN16AmeU6CPDtwwEjXLMdmIdfyFcUBoGc",
	authDomain: "netflix-winter-clone.firebaseapp.com",
	projectId: "netflix-winter-clone",
	storageBucket: "netflix-winter-clone.appspot.com",
	messagingSenderId: "990612398692",
	appId: "1:990612398692:web:958197a9a8c53f4236b571",
};

const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
	<>
		<FirebaseContext.Provider value={{ firebase: window.firebase }}>
			<BrowserRouter>
				<GlobalStyles />
				<App />
			</BrowserRouter>
		</FirebaseContext.Provider>
	</>,
	document.getElementById("root")
);
