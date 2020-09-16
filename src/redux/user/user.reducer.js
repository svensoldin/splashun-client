import UserActionTypes from "./user.types";

const INITIAL_STATE = {
	isAuthenticated: false,
	token: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				token: action.payload,
				err: null,
			};
		case UserActionTypes.SIGN_IN_FAILURE:
			return {
				...state,
				err: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
