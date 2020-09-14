import React, { Fragment, useState } from "react";
import Signin from "./components/signin/Signin.component";
import Gallery from "./components/gallery/Gallery.component";
import Searchbar from "./components/searchbar/Searchbar.component";

import "./App.css";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [token, setToken] = useState("");
	const [search, setSearch] = useState("");
	return (
		<div className="App">
			{isAuthenticated ? (
				<Fragment>
					<Searchbar setSearch={setSearch} />
					<Gallery token={token} search={search} />
				</Fragment>
			) : (
				<Signin
					setToken={setToken}
					setIsAuthenticated={setIsAuthenticated}
				/>
			)}
		</div>
	);
}

export default App;
