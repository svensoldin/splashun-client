import React, { Fragment } from "react";

import "./Searchbar.styles.css";

const Searchbar = ({ setSearch }) => {
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	return (
		<Fragment>
			<input
				type="text"
				onChange={handleSearch}
				className="searchbar"
				placeholder="Search high-resolution photos"
			/>
		</Fragment>
	);
};

export default Searchbar;
