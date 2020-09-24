import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Masonry from "react-masonry-css";

//Selectors
import { selectToken } from "../../redux/user/user.selectors";
import { selectPictureAdded } from "../../redux/picture/picture.selectors";

import "./Gallery.styles.css";

const Gallery = ({ token, search, picture }) => {
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
	}, [setPictures, token, picture]);

	const filteredPictures = pictures.filter((picture) => {
		return picture.label.toLowerCase().includes(search.toLowerCase());
	});

	return !pictures.length ? (
		<h2>LOADING</h2>
	) : (
		<Masonry
			breakpointCols={3}
			className="masonry"
			columnClassName="masonry-column"
		>
			{filteredPictures.map((picture) => (
				<div key={picture._id} className="list-element">
					<img
						src={picture.imageURL}
						alt={picture.label}
						className="photo"
					/>
					<div className="overlay">
						<p className="label">{picture.label}</p>
						<button className="delete">X</button>
					</div>
				</div>
			))}
		</Masonry>
	);
};

const mapStateToProps = (state) => {
	return {
		token: selectToken(state),
		picture: selectPictureAdded(state),
	};
};

export default connect(mapStateToProps)(Gallery);

// // <Fragment>
// <div className="gallery">
// 	{filteredPictures.map((picture) => (
// 		<li key={picture._id} className="list-element">
// 			<img src={picture.imageURL} alt={picture.label}></img>
// 			<div className="overlay">
// 				<p className="label">{picture.label}</p>
// 				<button className="delete">Delete</button>
// 			</div>
// 		</li>
// 	))}
// </div>;
// // </Fragment>
