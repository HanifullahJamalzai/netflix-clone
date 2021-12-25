import React from "react";
import { Header } from "../components/header";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../contexts/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./Footer";
import { useState } from "react/cjs/react.development";

export function BrowseContainer() {
	const [profile, setProfile] = useState({});

	const user = {
		displayName: "Karla",
		photoURL: 1,
	};

	return profile.displayName ? (
		<>
			<p>BrowseContainer</p>
			<FooterContainer />
		</>
	) : (
		<SelectProfileContainer />
	);
}
