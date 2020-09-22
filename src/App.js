import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

//Components
import Gallery from "./components/gallery/Gallery.component";
import Searchbar from "./components/searchbar/Searchbar.component";
import AddPicture from "./components/add-picture/AddPicture.component";
import SignInAndSignUp from "./components/signin-and-signup/SignInAndSignUp.component";
import Navbar from "./components/navbar/Navbar.component";

//Redux
import { selectToken } from "./redux/user/user.selectors";
import { selectHidden } from "./redux/picture/picture.selectors";
import { toggleAddPicture } from "./redux/picture/picture.actions";

import "./App.css";

Modal.setAppElement("#root");

function App({ token, hidden, toggleAddPicture }) {
	const [search, setSearch] = useState("");
	return (
		<div className="App">
			{token ? (
				<Fragment>
					<Navbar setSearch={setSearch} />
					<Gallery search={search} />
					<Modal
						isOpen={!hidden}
						onRequestClose={toggleAddPicture}
						className="modal"
						overlayClassName="modal-overlay"
					>
						<AddPicture />
					</Modal>
				</Fragment>
			) : (
				<Fragment>
					<SignInAndSignUp />
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

const mapDispatchToProps = (dispatch) => ({
	toggleAddPicture: () => dispatch(toggleAddPicture()),
});

export default connect(mapStateToProps)(App);
