import React from "react";

import "./Photo.styles.css";

const Photo = ({ imageURL, label, index, setViewer }) => {
	return (
		<div
			className="list-element"
			onClick={() => setViewer({ isOpen: true, index: index })}
		>
			<img src={imageURL} alt={label} className="photo" />
			<div className="overlay">
				<p className="label">{label}</p>
				<button className="delete">delete</button>
			</div>
		</div>
	);
};

export default Photo;
