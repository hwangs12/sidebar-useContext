import React, { useState } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";

export const SidebarContext = React.createContext();

function App() {
	const [sideBarOpen, setSideBarOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const toggleSideBar = () => {
		setSideBarOpen(!sideBarOpen);
	};
	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<SidebarContext.Provider
			value={{ sideBarOpen, toggleSideBar, modalOpen, toggleModal }}
		>
			<Home />
			<Modal />
			<Sidebar />
		</SidebarContext.Provider>
	);
}

export default App;
