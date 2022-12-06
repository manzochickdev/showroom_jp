import React from "react";
import { Link } from "react-router-dom";
import Logo from '../project2/img/logo.png'

const Header = () => {
    return (
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
            <div className="w-32 md:w-full">
                <img src={Logo} alt="app_logo" />
            </div>
            <div className=" hidden
            fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-90
            md:bg-transparent md:h-auto md:flex-row md:justify-between md:static
            ">
                <Link to="/" className="text-link">Home</Link>
                <Link to="/menu" className="text-link">Menu</Link>
                <Link to="/about" className="text-link">About</Link>
                <Link to="/contact" className="text-link">Contact</Link>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    )
}

export default Header