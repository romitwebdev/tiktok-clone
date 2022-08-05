import React from "react";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { BsChatSquareText } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { RiUserLine } from "react-icons/ri";
import { GrFormAdd } from "react-icons/gr";

const MainMenu = () => {
    return (
        <div className="main-menu-container container">
            <div className="main-icon">
                <IconContext.Provider value={{ className: "icon" }}>
                    <AiFillHome />
                </IconContext.Provider>
                <p>Home</p>{" "}
            </div>
            <div className="main-icon">
                <IconContext.Provider value={{ className: "icon" }}>
                    <HiUsers />
                </IconContext.Provider>
                <p>Friends</p>{" "}
            </div>
            <div className="main-icon add-btn-holder">
                <div className="add-btn">
                    <IconContext.Provider
                        value={{ className: "icon add-btn-icon" }}
                    >
                        <GrFormAdd />
                    </IconContext.Provider>
                </div>
            </div>
            <div className="main-icon">
                <IconContext.Provider value={{ className: "icon" }}>
                    <BsChatSquareText />
                </IconContext.Provider>
                <p>Inbox</p>{" "}
            </div>
            <div className="main-icon">
                <IconContext.Provider value={{ className: "icon" }}>
                    <RiUserLine />
                </IconContext.Provider>
                <p>Profile</p>{" "}
            </div>
        </div>
    );
};

export default MainMenu;
