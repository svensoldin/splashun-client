import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { SERVER_URL } from "../../constants";

//Components
import Masonry from "react-masonry-css";
import ImageViewer from "react-simple-image-viewer";
import Photo from "../photo/Photo.component";
import Spinner from "../spinner/Spinner.component";

//Actions
import { pictureFetchFailure } from "../../redux/picture/picture.actions";

//Selectors
import { selectToken } from "../../redux/user/user.selectors";
import { selectPictureAdded } from "../../redux/picture/picture.selectors";

import "./Gallery.styles.css";

const Gallery = ({ token, search, picture, pictureFetchFailure }) => {
	const [pictures, setPictures] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [viewer, setViewer] = useState({ isOpen: false, index: 0 });

	useEffect(() => {
		const getPictures = async () => {
			try {
				const res = await axios.get(`${SERVER_URL}/pictures`, {
					headers: { "x-auth-token": token },
				});
				const fetchedPictures = res.data;
				setPictures(fetchedPictures);
			} catch (err) {
				pictureFetchFailure(err);
			}
			setIsLoading(false);
		};
		getPictures();
	}, [setPictures, token, pictures, pictureFetchFailure]);

	const filteredPictures = pictures.filter((picture) => {
		return picture.label.toLowerCase().includes(search.toLowerCase());
	});

	const imageSources = filteredPictures.map((picture) => picture.imageURL);
	const closeImageViewer = () => {
		setViewer({ isOpen: false, index: 0 });
	};

	return isLoading ? (
		<Spinner />
	) : (
		<Fragment>
			<Masonry
				breakpointCols={{ default: 3, 600: 1 }}
				className="masonry"
				columnClassName="masonry-column"
			>
				{filteredPictures.map((picture, i) => (
					<Photo
						key={picture._id}
						imageURL={picture.imageURL}
						label={picture.label}
						setViewer={setViewer}
						index={i}
						token={token}
						id={picture._id}
					/>
				))}
			</Masonry>
			{viewer.isOpen && (
				<ImageViewer
					src={imageSources}
					currentIndex={viewer.index}
					onClose={closeImageViewer}
				/>
			)}
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		token: selectToken(state),
		picture: selectPictureAdded(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		pictureFetchFailure: (err) => dispatch(pictureFetchFailure(err)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
