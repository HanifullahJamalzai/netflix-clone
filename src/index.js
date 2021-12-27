import React from "react";
import ReactDOM from "react-dom";
// import { initializeApp } from "firebase/app";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./contexts/firebase";
// import { firebaseApp } from "./libs/firebase.prod";
import { seedDatabase } from "./seed";

const config = {
	apiKey: "AIzaSyBN16AmeU6CPDtwwEjXLMdmIdfyFcUBoGc",
	authDomain: "netflix-winter-clone.firebaseapp.com",
	projectId: "netflix-winter-clone",
	storageBucket: "netflix-winter-clone.appspot.com",
	messagingSenderId: "990612398692",
	appId: "1:990612398692:web:958197a9a8c53f4236b571",
};

const firebaseApp = window.firebase.initializeApp(config);

ReactDOM.render(
	<>
		<FirebaseContext.Provider value={{ firebaseApp }}>
			{/* <FirebaseContext.Provider value={{ firebase: window.firebase }}> */}
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById("root")
);
