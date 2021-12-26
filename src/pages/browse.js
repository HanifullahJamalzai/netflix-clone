import React from "react";
import { BrowseContainer } from "../containers/Browse";
import { useContent } from "../hooks";

export default function Browse() {
	const { series } = useContent("series");
	const { films } = useContent("films");
	console.log(series);
	console.log(films);
	return <BrowseContainer />;
}
