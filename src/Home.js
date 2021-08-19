import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { SidebarContext } from "./App";

const Home = () => {
	const { toggleSideBar, toggleModal } = useContext(SidebarContext);

	return (
		<main>
			<button className="sidebar-toggle" onClick={toggleSideBar}>
				<FaBars />
			</button>

			<button className="btn" onClick={toggleModal}>
				show modal
			</button>
		</main>
	);
};

export default Home;
