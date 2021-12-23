import React from "react";
import { FaqsContainer } from "../containers/Faqs";
import { JumbotronContainer } from "../containers/Jumbotron";
import { FooterContainer } from "../containers/Footer";

export default function Home() {
	return (
		<>
			<JumbotronContainer />;
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}
