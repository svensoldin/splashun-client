import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

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
		<div className="register">
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						name="name"
						required
						placeholder="John"
						value={name}
						onChange={handleChange}
					></input>
				</label>
				<label>
					Email
					<input
						type="email"
						name="email"
						required
						placeholder="johndoe@example.com"
						value={email}
						onChange={handleChange}
					></input>
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						required
						value={password}
						onChange={handleChange}
					></input>
				</label>
				<button type="button" onClick={handleSubmit}>
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
