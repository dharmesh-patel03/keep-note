import React from 'react';
import logo from "../logo/dp-logo.png";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="https://www.linkedin.com/in/dharmesh-patel-6bb2b4202/" className="flex items-center">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-gray-300">Keep</span>
                </NavLink>
            </div>
        </nav>
    )
}

export default Header