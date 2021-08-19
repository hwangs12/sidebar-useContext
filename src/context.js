import React, { useState, useContext } from "react";

const [sideBarOpen, setSideBarOpen] = useState(false);

const toggleSideBar = () => {
	setSideBarOpen(!sideBarOpen);
};
