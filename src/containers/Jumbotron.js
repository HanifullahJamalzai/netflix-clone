import React from "react";
import Jumbotron from "../components/jumbotron";
import jumbotron from "../fixtures/jumbo.json";

export function JumbotronContainer() {
	return (
		<Jumbotron.Container>
			{jumbotron.map((item) => (
				<>
					<Jumbotron.Title>{item.title}</Jumbotron.Title>
					<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
					<Jumbotron.Image
						src={process.env.PUBLIC_URL + `${item.image}`}
						alt={item.alt}
					/>
				</>
			))}
		</Jumbotron.Container>
	);
}
