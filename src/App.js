import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Signin from "./components/signin/Signin.component";
import Gallery from "./components/gallery/Gallery.component";
import Searchbar from "./components/searchbar/Searchbar.component";
import AddPicture from "./components/add-picture/AddPicture.component";

import "./App.css";

function App({ isAuthenticated, token }) {
	const [search, setSearch] = useState("");
	return (
		<div className="App">
			{isAuthenticated ? (
				<Fragment>
					<Searchbar setSearch={setSearch} />
					<Gallery search={search} />
					<AddPicture token={token} />
				</Fragment>
			) : (
				<Signin />
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.user.isAuthenticated,
		token: state.user.token,
	};
};

export default connect(mapStateToProps)(App);
