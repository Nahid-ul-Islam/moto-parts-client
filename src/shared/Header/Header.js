import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/icon/super-bike.ico';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-zinc-600 pb-1 sticky top-0 shadow-2xl">
                <div className="xl:mx-36 lg:mx-10 mx-auto pr-4 lg:px-0">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex-shrink-0">
                            <NavLink to="/home" className="text-decoration-none">
                                <div className="flex items-center ml-2 lg:ml-0">
                                    <img
                                        className="h-10 w-10 lg:h-10 lg:w-10 rounded-full"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                    <h2 className="text-white text-xl font-bold pl-5"><em><span className='text-orange-600'> MOTO </span><span className='text-white'>PARTS</span></em></h2>
                                </div>
                            </NavLink>

                        </div>
                        <div className="hidden md:block ">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <div>
                                    <NavLink
                                        to="/home"
                                        className="text-decoration-none hover:text-orange-600 text-white xl:text-xl px-3 py-2 rounded-md font-medium"
                                    >
                                        Home
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink
                                        to="/my-portfolio"
                                        className="text-decoration-none text-white xl:text-xl hover:text-orange-600 px-3 py-2 rounded-md text-medium font-medium"
                                    >
                                        My Portfolio
                                    </NavLink>
                                </div>

                                <div>
                                    {
                                        user ?
                                            <div className='flex'>
                                                <div>
                                                    <NavLink
                                                        to="/dashboard"
                                                        className="text-decoration-none text-white xl:text-xl hover:text-orange-600 px-3 py-2 rounded-md text-medium font-medium"
                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </div>
                                            </div>
                                            :
                                            ""
                                    }
                                </div>

                                <NavLink
                                    to="/blogs"
                                    className="text-decoration-none text-white xl:text-xl hover:text-orange-600 px-3 py-2 rounded-md text-medium font-medium"
                                >
                                    Blogs
                                </NavLink>

                                <div>
                                    {
                                        user ?
                                            <button onClick={handleSignOut} className='text-decoration-none text-white xl:text-xl hover:text-orange-600 px-3 py-2 rounded-md text-medium font-medium'>
                                                Sign Out
                                            </button>
                                            :
                                            <NavLink
                                                to="/signin"
                                                className="text-decoration-none text-white xl:text-xl hover:text-orange-600 px-3 py-2 rounded-md text-medium font-medium"
                                            >
                                                Sign In
                                            </NavLink>
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-800  text-xl hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >

                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>


                {isOpen && (
                    <div className="md:hidden transition-top duration-500 ease-in-out" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <div>
                                <NavLink
                                    to="/home"
                                    className="text-decoration-none hover:text-orange-600 text-white text-xl block px-3 py-2 rounded-md font-medium"
                                >
                                    Home
                                </NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="/my-portfolio"
                                    className="text-decoration-none text-white text-xl hover:text-orange-600 block px-3 py-2 rounded-md font-medium"
                                >
                                    My Portfolio
                                </NavLink>
                            </div>

                            {
                                user ?
                                    <div>
                                        <div>
                                            <NavLink
                                                to="/dashboard"
                                                className="text-decoration-none text-white text-xl hover:text-orange-600 block px-3 py-2 rounded-md font-medium"
                                            >
                                                Dashboard
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink
                                                to="/blogs"
                                                className="text-decoration-none text-white text-xl hover:text-orange-600 block px-3 py-2 rounded-md font-medium"
                                            >
                                                Blogs
                                            </NavLink>
                                        </div>
                                    </div>

                                    :
                                    ''
                            }


                            <div>
                                {
                                    user ?
                                        <button onClick={handleSignOut} className='text-decoration-none text-white hover:text-orange-600  text-xl block px-3 py-2 rounded-md font-medium'>
                                            Sign Out
                                        </button>
                                        :
                                        <NavLink
                                            to="/signin"
                                            className="text-decoration-none text-white text-xl hover:text-orange-600 px-3 py-2 rounded-md text-medium font-medium"
                                        >
                                            Sign In
                                        </NavLink>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;