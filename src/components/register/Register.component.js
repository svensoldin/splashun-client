import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { SERVER_URL } from "../../constants";

import "../signin/Signin.styles.css";

import { addDanger } from "../../redux/alert/alert.actions";
import {
	registerSuccess,
	registerFailure,
} from "../../redux/user/user.actions";

const Register = ({
	registerSuccess,
	registerFailure,
	setIsLoading,
	addDanger,
}) => {
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
		setIsLoading(true);
		try {
			const res = await axios({
				method: "post",
				url: `${SERVER_URL}/users/register`,
				data: userCredentials,
			});
			const token = res.data;
			setIsLoading(false);
			registerSuccess(token);
		} catch (err) {
			if (err.response.data === "User already exists") {
				addDanger("It seems you are already registered!");
			}
			setIsLoading(false);
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
						placeholder="Enter name"
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
						placeholder="Enter email"
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
						placeholder="Enter password"
					/>
				</div>
				<button className="button" onClick={handleSubmit}>
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
		addDanger: (err) => dispatch(addDanger(err)),
	};
};

export default connect(null, mapDispatchToProps)(Register);
