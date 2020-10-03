import React, { Fragment, useState } from "react";
import Signin from "../signin/Signin.component";
import Register from "../register/Register.component";
import Spinner from "../spinner/Spinner.component";

const SignInAndSignUp = () => {
	const [toggleRegister, setToggleRegister] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	return isLoading ? (
		<Spinner />
	) : (
		<Fragment>
			{toggleRegister ? (
				<Register setIsLoading={setIsLoading} />
			) : (
				<Signin setIsLoading={setIsLoading} />
			)}
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
