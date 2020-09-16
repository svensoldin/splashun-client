import { createSelector } from "reselect";

const selectPicture = (state) => state.picture;

export const selectPictureAdded = createSelector(
	[selectPicture],
	(picture) => picture.pictureAdded
);
