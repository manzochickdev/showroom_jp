import React from "react";
import { Link } from "react-router-dom";

interface DropdownProps{shouldShowMenu:boolean,onTapMenu:()=>void}
const Dropdown = ({shouldShowMenu,onTapMenu}:DropdownProps) => {
    return <div className={shouldShowMenu ? "grid grid-rows-4 text-center items-center bg-yellow-500" : "hidden"} onClick={()=>onTapMenu()}>
        <Link to="/" className="p-4">Home</Link>
        <Link to="/menu" className="p-4">Menu</Link>
        <Link to="/about" className="p-4">About</Link>
        <Link to="/contact" className="p-4">Contact</Link>
    </div>
}

export default Dropdown