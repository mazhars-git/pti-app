import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="max-w-screen-lg mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-3xl lowercase">pti.</a>
            </div>

            <div className="navbar">
            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-lg" />
            </div>

            <div className="navbar-end">
                <div className="z-30">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>
                                    MENU
                                </summary>
                                <ul className="bg-base-100 rounded-t-none w-36">
                                    <li><a>Home</a></li>
                                    <li><a>Details</a></li>
                                    <li><a>Category</a></li>
                                    <li><a>My Favorites</a></li>
                                    <li><a>Profile</a></li>
                                    <li><a>Log In/Sign Up</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>


                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;