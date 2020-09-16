import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Signin from "./components/signin/Signin.component";
import Gallery from "./components/gallery/Gallery.component";
import Searchbar from "./components/searchbar/Searchbar.component";
import AddPicture from "./components/add-picture/AddPicture.component";

import { selectToken } from "./redux/user/user.selectors";

import "./App.css";

function App({ token }) {
	const [search, setSearch] = useState("");
	return (
		<div className="App">
			{token ? (
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
		token: selectToken(state),
	};
};

export default connect(mapStateToProps)(App);
