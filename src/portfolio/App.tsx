import React from "react";
import NavBar from "./NavBar";
import './App.css'
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import WorksPage from "./WorksPage";
import ContactPage from "./ContactPage";

const PorfolioApp = () => {
    return(
        <div>
            <NavBar/>
            <HomePage/>
            <AboutPage/>
            <SkillsPage/>
            <WorksPage/>
            <ContactPage/>
        </div>
    )
}

export default PorfolioApp