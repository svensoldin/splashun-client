import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
	pictureAddSuccess,
	pictureAddFailure,
	toggleAddPicture,
} from "../../redux/picture/picture.actions";

import { selectToken } from "../../redux/user/user.selectors";

import "./AddPicture.styles.css";

const AddPicture = ({
	token,
	pictureAddSuccess,
	pictureAddFailure,
	toggleAddPicture,
}) => {
	const [formFields, setFormFields] = useState({
		label: "",
		imageURL: "",
	});

	const { label, imageURL } = formFields;

	const handleAddPicture = async (e) => {
		e.preventDefault();
		try {
			const res = await axios({
				method: "post",
				url: "http://localhost:5000/pictures/",
				headers: { "x-auth-token": token },
				data: {
					label,
					imageURL,
				},
			});
			pictureAddSuccess(res);
			//Hides the add-picture modal component
			toggleAddPicture();
		} catch (err) {
			pictureAddFailure(err);
		}
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<Fragment>
			<h2>Add a photo</h2>
			<form className="add-picture-form" onSubmit={handleAddPicture}>
				<label className="label">Label</label>
				<input
					type="text"
					name="label"
					placeholder="Ex: My cute dog"
					required
					value={label}
					onChange={handleChange}
					className="add-picture-input"
				/>
				<label className="label">Photo URL</label>
				<input
					type="text"
					name="imageURL"
					placeholder="https://images.unsplash.com/photo-15834235436"
					required
					value={imageURL}
					onChange={handleChange}
					className="add-picture-input"
				/>
				<div className="button-container">
					<button
						className="cancel"
						type="button"
						onClick={toggleAddPicture}
					>
						Cancel
					</button>
					<button
						className="submit"
						type="button"
						onClick={handleAddPicture}
					>
						Submit
					</button>
				</div>
			</form>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		token: selectToken(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		pictureAddSuccess: (picture) => dispatch(pictureAddSuccess(picture)),
		pictureAddFailure: (err) => dispatch(pictureAddFailure(err)),
		toggleAddPicture: () => dispatch(toggleAddPicture()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
