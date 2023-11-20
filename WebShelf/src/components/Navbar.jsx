import React, { useEffect, useRef, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {

    const handleBookNameChange = event => {
        setBookName(event.target.value)
    }

    const [bookName, setBookName] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const handleSearchSubmit = event => {
        console.log(bookName)
        navigate('/search_results', { replace: false, state: { bookName: bookName } });
    }

    return (
        <nav
            className='flex justify-between items-center px-4 absolute top-0 left-0 z-10 w-full text-white home-nav-bar'>
            <h1><Link className='nav-bar-item' to="/">WebShelf</Link></h1>
            <ul className='hidden md:flex'>

                <li >
                    <Link className='nav-bar-item' to="/">Home</Link>
                </li>
                <Dropdown className="custom-dropdown"
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                    show={show}
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
                        {/*<Dropdown.Item as={Link} to="/new_releases" >
                            New Releases
                        </Dropdown.Item>*/}
                    </Dropdown.Menu>
                </Dropdown>
                <li>
                    <Link className='nav-bar-item' to="/my_shelves">My Shelves</Link>
                </li>
            </ul>
            <div className='hidden md:flex'>
                {/* <form
        onSubmit={handleSearchSubmit}
        className='flex  p-1 text-black bg-gray-100/90 max-w-[700px] w-[80%] navbar-search-bar'
        >
        <input
            ref={inputRef}
            type='text'
            name='bookName'
            value={bookName}
            onChange={handleBookNameChange}
            placeholder='Search for a book...'
            className='placeholder-text'
        />
        <button className='w-11 navbar-search-button'>
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
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </form> */}
            </div>


        </nav>
    );
};

export default Navbar;
