import React, { useState } from "react";
import {
	Body,
	Title,
	Header,
	Container,
	Inner,
	Item,
	Frame,
} from "./styles/accordion";

export default function Accordion({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	return <Body {...restProps}>{children}</Body>;
};
