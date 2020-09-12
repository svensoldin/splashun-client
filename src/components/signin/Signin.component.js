import React, { useState } from "react";
import axios from "axios";

import "./Signin.styles.css";

const SignIn = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = credentials;

	const handleSignin = async (e) => {
		e.preventDefault();
		const res = await axios.post("http://localhost:5000/users/signin", {
			email,
			password,
		});
		const token = res.data;
		return token;
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	return (
		<form className="signin-form" onSubmit={handleSignin} autoComplete="off">
			<label>
				Email:
				<input
					type="email"
					name="email"
					required
					value={email}
					onChange={handleChange}
					autoComplete="off"
				></input>
			</label>
			<label>
				Password:
				<input
					type="password"
					name="password"
					required
					value={password}
					onChange={handleChange}
				></input>
			</label>
			<button className="button" type="">
				Sign In
			</button>
		</form>
	);
};

export default SignIn;
