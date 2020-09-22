import React from "react";
import { connect } from "react-redux";
import Searchbar from "../searchbar/Searchbar.component";

import { toggleAddPicture } from "../../redux/picture/picture.actions";

import "./Navbar.styles.css";

const Navbar = ({ setSearch, toggleAddPicture }) => {
	return (
		<div className="navbar">
			<Searchbar setSearch={setSearch} />
			<button className="add-picture-btn" onClick={toggleAddPicture}>
				Add Picture
			</button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleAddPicture: () => dispatch(toggleAddPicture()),
	};
};

export default connect(null, mapDispatchToProps)(Navbar);
