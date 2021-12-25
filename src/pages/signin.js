import React, { useState } from "react";
import { HeaderContainer } from "../containers/Header";
import { Form } from "../components";

export default function Signin() {
	const [error, setError] = useState();
	const [emailAddress, setEmailAddress] = useState();
	const [password, setPassword] = useState();

	const handleSignin = (event) => {
		event.preventDefault();

		//
	};

	return (
		<HeaderContainer>
			<Form>
				<Form.Title>Sign In</Form.Title>
				{error && <Form.Error>{error}</Form.Error>}

				<Form.Base onSubmit={handleSignin} method="POST">
					<Form.Input
						type="text"
						placeholder="Email Address"
						value={emailAddress}
						onChange={({ target }) => setEmailAddress(target.value)}
					/>
					<Form.Input
						type="password"
						placeholder="Password"
						value={password}
						onChange={({ target }) => setPassword(target.value)}
					/>
					<Form.Submit disabled="false" type="submit">
						Sign In
					</Form.Submit>
					<Form.Text>
						New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA.
					</Form.TextSmall>
				</Form.Base>
			</Form>
		</HeaderContainer>
	);
}
