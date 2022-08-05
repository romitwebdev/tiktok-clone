import React, { useState } from "react";
import { MdLiveTv } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";

const Nav = () => {
    const [activeTopNav, setActiveTopNav] = useState({
        following: false,
        forYou: true,
    });

    // handle the top nav menu click
    const handleNavActive = (args: string) => {
        setActiveTopNav({
            ...activeTopNav,
            following: args === "following" ? true : false,
            forYou: args === "forYou" ? true : false,
        });
    };

    return (
        <nav className="navbar">
            {/* live icons container*/}
            <div className="nav-live">
                <IconContext.Provider value={{ className: "nav-live icons" }}>
                    <MdLiveTv />
                </IconContext.Provider>
            </div>
            {/* live icons container ends here */}

            {/* nav text container starts */}
            <div className="nav-text-holder">
                <p
                    onClick={() => handleNavActive("following")}
                    className={
                        activeTopNav.following ? "nav-text active" : "nav-text"
                    }
                >
                    Following
                </p>
                <p
                    onClick={() => handleNavActive("forYou")}
                    className={
                        activeTopNav.forYou ? "nav-text active" : "nav-text"
                    }
                >
                    For You
                </p>
            </div>
            {/* nav text container ends */}

            {/* nav search starts */}
            <div className="nav-search">
                <IconContext.Provider value={{ className: "nav-live icons" }}>
                    <FiSearch />
                </IconContext.Provider>
            </div>
            {/* nav search ends */}
        </nav>
    );
};

export default Nav;
