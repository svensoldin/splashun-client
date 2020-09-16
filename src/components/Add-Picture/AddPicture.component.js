import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import {
	pictureAddSuccess,
	pictureAddFailure,
} from "../../redux/picture/picture.actions";
import { selectToken } from "../../redux/user/user.selectors";
import axios from "axios";

const AddPicture = ({ token, pictureAddSuccess, pictureAddFailure }) => {
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
			<form className="add-picture" onSubmit={handleAddPicture}>
				<label>
					Label
					<input
						type="text"
						name="label"
						placeholder="Ex: My cute dog"
						required
						value={label}
						onChange={handleChange}
					></input>
				</label>
				<label>
					Photo URL
					<input
						type="text"
						name="imageURL"
						placeholder="https://images.unsplash.com/photo-15834235436"
						required
						value={imageURL}
						onChange={handleChange}
					></input>
				</label>
				<button className="cancel" type="button">
					Cancel
				</button>
				<button className="submit" type="button" onClick={handleAddPicture}>
					Submit
				</button>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
