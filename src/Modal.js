import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
	const { toggleModal, modalOpen } = useGlobalContext();

	return (
		<div className={`modal-overlay ${modalOpen && "show-modal"}`}>
			<div className="modal-container">
				<h3>modal content</h3>
				<button className="close-modal-btn" onClick={toggleModal}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
};

export default Modal;
