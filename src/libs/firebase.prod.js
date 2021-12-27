// import Firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from "../seed";

const config = {
	apiKey: "AIzaSyBN16AmeU6CPDtwwEjXLMdmIdfyFcUBoGc",
	authDomain: "netflix-winter-clone.firebaseapp.com",
	projectId: "netflix-winter-clone",
	storageBucket: "netflix-winter-clone.appspot.com",
	messagingSenderId: "990612398692",
	appId: "1:990612398692:web:958197a9a8c53f4236b571",
};

// const app = firebase.initializeApp(config);
const firebaseApp = initializeApp({ config });
// 2) when seeding the database you'll have to uncomment this!
const db = getFirestore(firebaseApp);
// console.log(db);
seedDatabase(firebaseApp);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebaseApp };
