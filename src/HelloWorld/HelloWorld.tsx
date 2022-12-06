import React,{useState,useEffect} from "react";
import Content from "./components/Content";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import './HelloWorld.css';

const HelloWorld = () => {
    const [shouldShowMenu, setShouldShowMenu] = useState(false)

    const toggleMenu = () => {
        setShouldShowMenu(!shouldShowMenu)
    }
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && shouldShowMenu) {
                setShouldShowMenu(false)
            }
        }

        window.addEventListener('resize', hideMenu)

        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    })



    return (
        <div>
            <NavBar onTapMenu={toggleMenu} />
            <Dropdown shouldShowMenu={shouldShowMenu} onTapMenu={toggleMenu} />
            <Hero />
            <Content />
            <Footer />
        </div>
    );
}

export default HelloWorld