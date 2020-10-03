import React from "react";
import { connect } from "react-redux";

import { selectAlertError } from "../../redux/alert/alert.selectors";

import "./Alert.styles.css";

const Alert = ({ error }) => {
	return error && <div className="alert">{error}</div>;
};

const mapStateToProps = (state) => ({
	error: selectAlertError(state),
});

export default connect(mapStateToProps)(Alert);
