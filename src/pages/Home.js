import React from "react";
import { FaqsContainer } from "../containers/Faqs";
import { JumbotronContainer } from "../containers/Jumbotron";
import { FooterContainer } from "../containers/Footer";
import { HeaderContainer } from "../containers/Header";
import { OptForm } from "../components";
export default function Home() {
	return (
		<>
			<HeaderContainer>
				<OptForm>
					<OptForm.Input placeholder="Email Address" />
					<OptForm.Button>Try it now</OptForm.Button>
					<OptForm.Break />
					<OptForm.Text>
						Ready to watch? Enter your email to create or restart your
						membership.
					</OptForm.Text>
				</OptForm>
			</HeaderContainer>
			<JumbotronContainer />;
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}
