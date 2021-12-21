import React from "react";
import {
	Item,
	Container,
	Inner,
	Title,
	SubTitle,
	Image,
} from "./styles/jumbotron";

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

Jumbotron.Title = function Jumbotrontitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
	return <Image {...restProps} />;
};
