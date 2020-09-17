import PictureActionTypes from "./picture.types";

const INITIAL_STATE = {
	hidden: true,
	err: null,
};

const pictureReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PictureActionTypes.PICTURE_ADD_SUCCESS:
			return {
				...state,
				pictureAdded: true,
			};
		case PictureActionTypes.PICTURE_ADD_FAILURE:
			return {
				...state,
				err: action.payload,
			};
		case PictureActionTypes.TOGGLE_ADD_PICTURE:
			return {
				...state,
				hidden: !state.hidden,
			};
		default:
			return state;
	}
};

export default pictureReducer;
