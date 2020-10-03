import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectToken = createSelector([selectUser], (user) => user.token);

export const selectUserError = createSelector([selectUser], (user) => user.err);
