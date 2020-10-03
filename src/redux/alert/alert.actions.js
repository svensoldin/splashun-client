import AlertActionTypes from "./alert.types";

export const addDanger = (err) => ({
	type: AlertActionTypes.ADD_DANGER,
	payload: err,
});
