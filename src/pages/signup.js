import React, { useState } from "react";
import { HeaderContainer } from "../containers/Header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { FooterContainer } from "../containers/Footer";

export default function Signup() {
	const [firstName, setFirstName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isInvalid =
		(firstName === "") | (emailAddress === "") | (password === "");

	const handleSignup = (event) => {
		event.preventDefault();

		//
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignup} method="POST">
						<Form.Input
							type="text"
							name="firstName"
							value={firstName}
							onChange={({ target }) => {
								setFirstName(target.value);
							}}
							placeholder="First Name"
						/>
						<Form.Input
							type="email"
							name="emailAddress"
							value={emailAddress}
							onChange={({ target }) => {
								setEmailAddress(target.value);
							}}
							placeholder="Email Address"
						/>
						<Form.Input
							type="password"
							name="password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
							placeholder="Password"
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign Up
						</Form.Submit>
						<Form.Text>
							Already a user? <Form.Link to="/signin">Sign In now.</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Goolge reCAPTCHA.
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>

			<FooterContainer />
		</>
	);
}
