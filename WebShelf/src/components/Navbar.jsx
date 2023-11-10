import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Home.css";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import Test from "./Test.jsx";

const Navbar = () => {
    const [navIsShown, setnavIsShown] = useState(false);
    const toggleNavIsShown = () => {
        setnavIsShown((navIsShown) => !navIsShown);
    };

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <nav
            className='flex justify-between items-center px-4 absolute top-0 left-0 z-10 w-full text-white home-nav-bar'>
            <h1><Link to="/">WebShelf</Link></h1>
            <ul className='hidden md:flex'>

                <li className='nav-bar-item'>
                    <Link to="/">Home</Link>
                </li>
                <Dropdown className="custom-dropdown nav-bar-item"
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}
                show={truex5}
                >
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        Discovery
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/all" >
                            Browse All
                        </Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item as={Link} to="/monthly_suggestions" >
                            Monthly Suggestions
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/new_releases" >
                            New Releases
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <li className='nav-bar-item'>
                    <Link to="/my_shelves">My Shelves</Link>
                </li>
            </ul>
            <div className='hidden md:flex'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 mr-2'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                </svg>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                    />
                </svg>
            </div>
            {!navIsShown && (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 md:hidden'
                    onClick={toggleNavIsShown}
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
                    />
                </svg>
            )}

        </nav>
    );
};

export default Navbar;
