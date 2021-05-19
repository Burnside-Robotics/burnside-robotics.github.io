import React, { useState } from "react";
import HeaderLogo from "../Assets/Photos/HeaderLogo.png";
import "./style.scss";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { useSignedIn } from "../useSignedIn";
export const Login = () => {
	const [email, setEmail] = useState(String);
	const [password, setPassword] = useState(String);
	const history = useHistory();
	const isSignedIn = useSignedIn();
	function SignIn() {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				console.log("Sign in Successful");
			})
			.catch((error) => {
				console.log("Sign in Failed");
			});
	}
	if (isSignedIn) history.push("/user");
	return (
		<div className="login-container">
			<img className="" src={HeaderLogo} alt="logo" />
			<input
				type="text"
				name="email"
				placeholder="Email"
				value={email}
				onChange={(value) => setEmail(value.target.value)}
			/>
			<input
				type="text"
				name="password"
				placeholder="Password"
				value={password}
				onChange={(value) => setPassword(value.target.value)}
			/>
			<button onClick={() => SignIn()}>Sign In</button>
		</div>
	);
};
