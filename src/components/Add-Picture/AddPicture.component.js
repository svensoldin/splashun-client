import React, { Fragment } from "react";

const AddPicture = ({ token }) => {
	return (
		<Fragment>
			<h2>Add a photo</h2>
			<form className="add-picture">
				<label>
					Label
					<input
						type="text"
						title="Label"
						placeholder="Ex: My cute dog"
						required
					></input>
				</label>
				<label>
					Photo URL
					<input
						type="text"
						title="Photo URL"
						placeholder="https://images.unsplash.com/photo-15834235436"
						required
					></input>
				</label>
				<button className="cancel" type="button">
					Cancel
				</button>
				<button className="submit" type="button">
					Submit
				</button>
			</form>
		</Fragment>
	);
};

export default AddPicture;
