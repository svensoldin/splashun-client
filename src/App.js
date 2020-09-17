import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Signin from "./components/signin/Signin.component";
import Register from "./components/register/Register.component";
import Gallery from "./components/gallery/Gallery.component";
import Searchbar from "./components/searchbar/Searchbar.component";
import AddPicture from "./components/add-picture/AddPicture.component";

import { toggleAddPicture } from "./redux/picture/picture.actions";

import { selectToken } from "./redux/user/user.selectors";
import { selectHidden } from "./redux/picture/picture.selectors";

import "./App.css";

function App({ token, hidden, toggleAddPicture }) {
	const [search, setSearch] = useState("");
	return (
		<div className="App">
			{token ? (
				<Fragment>
					{hidden ? (
						<button
							className="add-picture-btn"
							onClick={toggleAddPicture}
						>
							Add photo
						</button>
					) : (
						<AddPicture />
					)}
					<Searchbar setSearch={setSearch} />
					<Gallery search={search} />
				</Fragment>
			) : (
				<Fragment>
					<Signin />
					<Register />
				</Fragment>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		token: selectToken(state),
		hidden: selectHidden(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleAddPicture: () => dispatch(toggleAddPicture()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
