import React from "react";
import { Item, Container, Inner } from "./styles/jumbotron";
export default function Jumbotron({
	children,
	direction = "row",
	...restProps
}) {
	return (
		<Item>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};
