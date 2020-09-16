import UserActionTypes from "./user.types";

export const signInStart = () => {
	return {
		type: UserActionTypes.SIGN_IN_START,
	};
};

export const signInSuccess = (token) => {
	return {
		type: UserActionTypes.SIGN_IN_SUCCESS,
		payload: token,
	};
};

export const signInFailure = (err) => {
	return {
		type: UserActionTypes.SIGN_IN_FAILURE,
		payload: err,
	};
};
