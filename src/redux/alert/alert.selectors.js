import { createSelector } from "reselect";

const selectAlerts = (state) => state.alerts;

export const selectAlertError = createSelector(
	[selectAlerts],
	(alerts) => alerts.err
);
