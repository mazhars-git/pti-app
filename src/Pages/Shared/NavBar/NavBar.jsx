import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl lowercase">pti.</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search Audio book" className="input input-bordered w-44" />
                </div>

                <div className="">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>
                                    MENU
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
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