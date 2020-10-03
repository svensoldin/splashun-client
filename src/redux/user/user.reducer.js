import UserActionTypes from "./user.types";

const INITIAL_STATE = {
	token: null,
	err: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				token: action.payload,
			};
		case UserActionTypes.SIGN_IN_FAILURE:
			return {
				...state,
				err: action.payload,
			};
		case UserActionTypes.REGISTER_SUCCESS:
			return {
				...state,
				token: action.payload,
			};
		case UserActionTypes.REGISTER_FAILURE:
			return {
				...state,
				err: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
