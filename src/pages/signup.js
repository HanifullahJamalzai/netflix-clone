import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../contexts/firebase";
import { HeaderContainer } from "../containers/Header";
import { FooterContainer } from "../containers/Footer";
import * as ROUTES from "../constants/routes";
import { Form } from "../components";

export default function Signup() {
	const { firebase } = useContext(FirebaseContext);
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isInvalid =
		(firstName === "") | (emailAddress === "") | (password === "");

	const handleSignup = (event) => {
		event.preventDefault();

		firebase
			.auth()
			.createUserWithEmailAndPassword(emailAddress, password)
			.then((result) =>
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1,
					})
					.then(() => {
						setEmailAddress("");
						setPassword("");
						setFirstName("");
						setError("");
						navigate(ROUTES.BROWSE);
					})
			)
			.catch((error) => setError(error.message));
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
