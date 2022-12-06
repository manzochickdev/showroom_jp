import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps { onTapMenu: () => void }
const NavBar = ({ onTapMenu }: NavBarProps) => {
    return (
        <div className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role='navigation'>
            <Link to="/" className="pl-8">EGG</Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={() => onTapMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/" className="p-4">Home</Link>
                <Link to="/menu" className="p-4">Menu</Link>
                <Link to="/about" className="p-4">About</Link>
                <Link to="/contact" className="p-4">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar