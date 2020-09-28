import React, { Fragment, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../constants";

import Modal from "react-modal";
import "./Photo.styles.css";

const Photo = ({ imageURL, label, index, setViewer, id, token }) => {
	const [modal, setModal] = useState(false);
	const handleDelete = async () => {
		try {
			await axios.delete(`${SERVER_URL}/pictures/${id}`, {
				headers: { "x-auth-token": token },
			});
			alert("Picture successfully deleted!");
		} catch (err) {
			console.log(err);
		}
		setModal(false);
	};

	const handleOpenModal = (e) => {
		e.stopPropagation();
		setModal(true);
	};

	return (
		<Fragment>
			<div
				className="list-element"
				onClick={() => setViewer({ isOpen: true, index: index })}
			>
				<img src={imageURL} alt={label} className="photo" />
				<div className="overlay">
					<p className="label">{label}</p>
					<button className="delete" onClick={handleOpenModal}>
						delete
					</button>
				</div>
			</div>
			<Modal
				className="modal"
				overlayClassName="modal-overlay"
				isOpen={modal}
				onRequestClose={() => setModal(false)}
			>
				<h2>Are you sure you want to delete this picture ?</h2>
				<div className="button-container">
					<button
						type="button"
						onClick={() => setModal(false)}
						className="cancel"
					>
						Cancel
					</button>
					<button
						type="button"
						onClick={() => handleDelete()}
						className="submit"
					>
						Delete
					</button>
				</div>
			</Modal>
		</Fragment>
	);
};

export default Photo;
