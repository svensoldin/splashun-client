import React from "react";

const Searchbar = ({ setSearch }) => {
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div>
			<input type="text" onChange={handleSearch}></input>
		</div>
	);
};

export default Searchbar;
