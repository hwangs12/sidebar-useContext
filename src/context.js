import React, { useState, useContext } from "react";

//this context will come up in every component you use to pull state data, which is laid out in AppProvider
const AppContext = React.createContext();

//to be used in index js and control state using hooks provided
const AppProvider = ({ children }) => {
	const [sideBarOpen, setSideBarOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const toggleSideBar = () => {
		setSideBarOpen(!sideBarOpen);
	};
	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<AppContext.Provider
			value={{ sideBarOpen, modalOpen, toggleSideBar, toggleModal }}
		>
			{children}
		</AppContext.Provider>
	);
};

//create a custom hook
export const useGlobalContext = () => {
	return useContext(AppContext);
};

//you can create custom hook with the context that you created

export { AppContext, AppProvider };
