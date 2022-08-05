import React from "react";
import Content from "./Content";
import MainMenu from "./MainMenu";
import Nav from "./Nav";

const Home = () => {
    return (
        <div className="home-container container">
            <Nav />
            <Content />
            <MainMenu />
        </div>
    );
};

export default Home;
