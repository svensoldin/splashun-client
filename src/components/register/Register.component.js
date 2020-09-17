import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import "../signin/Signin.styles.css";

import {
	registerSuccess,
	registerFailure,
} from "../../redux/user/user.actions";

const Register = ({ registerSuccess, registerFailure }) => {
	const [userCredentials, setUserCredentials] = useState({
		name: "",
		email: "",
		password: "",
	});

	const { name, email, password } = userCredentials;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const handleSubmit = async () => {
		try {
			const res = await axios({
				method: "post",
				url: "http://localhost:5000/users/register",
				data: userCredentials,
			});
			const token = res.data;
			registerSuccess(token);
		} catch (err) {
			registerFailure(err);
		}
	};

	return (
		<div className="form-container">
			<form className="signin-form" onSubmit={handleSubmit}>
				<h3>Sign Up</h3>
				<div className="form-field">
					<label className="label">Name</label>
					<input
						type="text"
						name="name"
						required
						placeholder="enter name"
						value={name}
						onChange={handleChange}
						className="input"
					/>
				</div>
				<div className="form-field">
					<label className="label">Email</label>
					<input
						type="email"
						name="email"
						required
						placeholder="enter email"
						value={email}
						onChange={handleChange}
						className="input"
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
						placeholder="enter password"
					/>
				</div>
				<button type="button" className="button" onClick={handleSubmit}>
					Register
				</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		registerSuccess: (token) => dispatch(registerSuccess(token)),
		registerFailure: (err) => dispatch(registerFailure(err)),
	};
};

export default connect(null, mapDispatchToProps)(Register);
