import React, { useState, useContext } from "react";
import { FirebaseContext } from "../contexts/firebase";
import { useNavigate } from "react-router";
import { HeaderContainer } from "../containers/Header";
import { FooterContainer } from "../containers/Footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
	const { firebase } = useContext(FirebaseContext);
	const navigate = useNavigate();

	const [error, setError] = useState();
	const [emailAddress, setEmailAddress] = useState();
	const [password, setPassword] = useState();

	const isInvalid = (password === "") | (emailAddress === "");

	const handleSignin = (event) => {
		event.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				setError("");
				setPassword("");
				setEmailAddress("");
				navigate(ROUTES.BROWSE);
			})
			.catch((error) => setError(error.message));
	};

	return (
		<>
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
						<Form.Submit disabled={isInvalid} type="submit">
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
			<FooterContainer />
		</>
	);
}
