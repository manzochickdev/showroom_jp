import React from "react";
import AppInstruction from "./AppInstruction";
import AppScreenshot from "./AppScreenshot";
import Banner from "./Banner";
import Download from "./Download";
import Footer from "./Footer";
import Header from "./Header";
import './project2.css'

const FoodApp = () => {
    return(
        <div>
            <Header/>
            <Banner/>
            <AppScreenshot/>
            <AppInstruction/>
            <Download/>
            <Footer/>
        </div>
    )
}

export default FoodApp