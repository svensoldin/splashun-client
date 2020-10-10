import React from "react";
import { connect } from "react-redux";
import Searchbar from "../searchbar/Searchbar.component";
import { ReactComponent as Logo } from "../../camera.svg";

import { toggleAddPicture } from "../../redux/picture/picture.actions";

import "./Navbar.styles.css";

const Navbar = ({ setSearch, toggleAddPicture }) => {
	return (
		<div className="navbar">
			<div className="logo-container">
				<Logo className="logo" />
			</div>
			<div className="nav-container">
				{" "}
				<Searchbar setSearch={setSearch} />
				<button className="add-picture-btn" onClick={toggleAddPicture}>
					Submit a photo
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleAddPicture: () => dispatch(toggleAddPicture()),
	};
};

export default connect(null, mapDispatchToProps)(Navbar);
