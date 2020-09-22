import React, { Fragment, useState } from "react";
import Signin from "../signin/Signin.component";
import Register from "../register/Register.component";

const SignInAndSignUp = () => {
	const [toggleRegister, setToggleRegister] = useState(false);
	return (
		<Fragment>
			{toggleRegister ? <Register /> : <Signin />}
			<p>
				{toggleRegister
					? "Already have an account ?"
					: "Don't have an account ?"}
				<span
					className="register-link"
					onClick={() => setToggleRegister(!toggleRegister)}
				>
					{" "}
					{toggleRegister ? "Sign in here" : "Register here"}
				</span>
			</p>
		</Fragment>
	);
};

export default SignInAndSignUp;
