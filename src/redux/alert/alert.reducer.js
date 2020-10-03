import AlertActionTypes from "./alert.types";

const INITIAL_STATE = {
	err: null,
};

const alertReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AlertActionTypes.ADD_DANGER:
			return {
				...state,
				err: action.payload,
			};
		default:
			return state;
	}
};

export default alertReducer;
