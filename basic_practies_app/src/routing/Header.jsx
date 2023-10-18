import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";
import HoverUser from './HoverUser';
import myimage from './img.png'

export default function Header() {
    const navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    let user = JSON.parse(localStorage.getItem('use-info'));
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <img src={myimage} className='mr-3 h-14' />
                    <div className="flex items-center lg:order-2">

                        {user &&
                            <>
                                <span className='p-2 rounded-lg text-white bg-blue-400 w-auto h-10'>{user && user.name} {user && user.Mname} {user && user.Lname}</span>
                                <span className=' bg-blue-300 rounded-full p-2 text-2xl'
                                    onMouseEnter={handleMouseEnter}
                                >
                                    <AiOutlineUser />
                                </span>
                            </>}
                        {isHovered && <HoverUser setIsHovered={setIsHovered} />}
                        {/* <HoverUser/> */}
                </div>
                <div
                    className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        {!user && <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Login
                            </NavLink>
                        </li>}


                    </ul>
                </div>
            </div>
        </nav>
        </header >
    )
}
