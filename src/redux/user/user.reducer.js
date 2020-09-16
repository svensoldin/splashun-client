import UserActionTypes from "./user.types";

const INITIAL_STATE = {
	token: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
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
