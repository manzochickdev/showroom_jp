import React, { useState } from "react";
import Logo from './assets/logo1.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [shouldShowNav, setShouldShowNav] = useState(false)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
            <div className="w-16">
                <img src={Logo} alt="logo_image" />
            </div>

            <div className="hidden md:flex">
                <ul className="flex">
                    <li>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to='works' smooth={true} duration={500}>
                            Works
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="md:hidden z-10" onClick={() => setShouldShowNav(!shouldShowNav)}>
                {shouldShowNav ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={shouldShowNav ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden" : "hidden"}>
                <li className="py-6 text-4xl">
                    <Link onClick={() => setShouldShowNav(!shouldShowNav)} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={() => setShouldShowNav(!shouldShowNav)} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={() => setShouldShowNav(!shouldShowNav)} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={() => setShouldShowNav(!shouldShowNav)} to='works' smooth={true} duration={500}>
                        Works
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={() => setShouldShowNav(!shouldShowNav)} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">Linkedin <FaLinkedin size={30} /></a>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">Github <FaGithub size={30} /></a>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">Email <HiOutlineMail size={30} /></a>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">Resume <BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default NavBar