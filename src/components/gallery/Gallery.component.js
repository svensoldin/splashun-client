import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import "./Gallery.styles.css";

const Gallery = ({ token, search }) => {
	const [pictures, setPictures] = useState([]);

	useEffect(() => {
		const getPictures = async () => {
			const res = await axios.get("http://localhost:5000/pictures", {
				headers: { "x-auth-token": token },
			});
			const fetchedPictures = res.data;
			setPictures(fetchedPictures);
		};
		getPictures();
	}, [setPictures, token]);

	const filteredPictures = pictures.filter((picture) => {
		return picture.label.toLowerCase().includes(search.toLowerCase());
	});

	return pictures.length === 0 ? (
		<h2>LOADING</h2>
	) : (
		<Fragment>
			<div className="gallery">
				{filteredPictures.map((picture) => (
					<li key={picture._id} className="list-element">
						<img src={picture.imageURL} alt={picture.label}></img>
						<div className="overlay">
							<p className="label">{picture.label}</p>
							<button className="delete">Delete</button>
						</div>
					</li>
				))}
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		token: state.user.token,
	};
};

export default connect(mapStateToProps)(Gallery);