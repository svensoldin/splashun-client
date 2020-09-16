import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
	signInStart,
	signInSuccess,
	signInFailure,
} from "../../redux/user/user.actions";

import "./Signin.styles.css";

const SignIn = ({ signInStart, signInSuccess, signInFailure }) => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = credentials;

	const handleSignin = async (e) => {
		e.preventDefault();
		signInStart();
		try {
			const res = await axios.post("http://localhost:5000/users/signin", {
				email,
				password,
			});
			const token = res.data;
			signInSuccess(token);
		} catch (err) {
			signInFailure(err);
		}
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

const mapDispatchToProps = (dispatch) => {
	return {
		signInStart: () => dispatch(signInStart()),
		signInSuccess: (token) => dispatch(signInSuccess(token)),
		signInFailure: (err) => dispatch(signInFailure(err)),
	};
};

export default connect(null, mapDispatchToProps)(SignIn);
