import PictureActionTypes from "./picture.types";

export const pictureAddSuccess = () => {
	return {
		type: PictureActionTypes.PICTURE_ADD_SUCCESS,
	};
};

export const pictureAddFailure = (err) => {
	return {
		type: PictureActionTypes.PICTURE_ADD_FAILURE,
		payload: err,
	};
};

export const toggleAddPicture = () => {
	return {
		type: PictureActionTypes.TOGGLE_ADD_PICTURE,
	};
};
