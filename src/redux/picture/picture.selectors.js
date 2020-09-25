import { createSelector } from "reselect";

const selectPicture = (state) => state.picture;

export const selectPictureAdded = createSelector(
	[selectPicture],
	(picture) => picture.pictureAdded
);

export const selectHidden = createSelector(
	[selectPicture],
	(picture) => picture.hidden
);

export const selectError = createSelector(
	[selectPicture],
	(picture) => picture.err
);
