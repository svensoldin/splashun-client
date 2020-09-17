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
		<div className="form-container">
			<form
				className="signin-form"
				onSubmit={handleSignin}
				autoComplete="off"
			>
				<h3>Sign in</h3>
				<div className="form-field">
					<label className="label">Email</label>
					<input
						type="email"
						name="email"
						required
						value={email}
						onChange={handleChange}
						autoComplete="off"
						className="input"
						placeholder="Enter email"
					/>
				</div>
				<div className="form-field">
					<label className="label">Password</label>
					<input
						type="password"
						name="password"
						required
						value={password}
						onChange={handleChange}
						className="input"
						placeholder="Enter password"
					/>
				</div>
				<button className="button" type="button" onClick={handleSignin}>
					Sign In
				</button>
				<p>
					Don't have an account ?{" "}
					<span className="register-link">Register here</span>
				</p>
			</form>
		</div>
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
