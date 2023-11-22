import clsx from "clsx";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { books, users } from "./Data"; // Adjust the import statement based on the actual structure of your project
import { useParams, useLocation } from "react-router-dom";
import "./Shelf.css";
import BooksList from "./BooksList.jsx";
import "./BrowseAll.css";

const listContainerStyles = {
    margin: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -35%)",
    width: "calc((44px + 24px) * 10)",
};

const buttonsContainerStyles2 = {
    marginTop: "40.5rem", // Adjust the margin as needed
    textAlign: "center",
};

const buttonsContainerStyles = {
    marginTop: "40rem", // Default margin
  
    // Media query for larger screens
    '@media (min-width: 768px)': {
      marginTop: '4rem', // Adjust the margin for larger screens
    },
  };

const animationStyle = "transition-all duration-500 ease will-change-auto";

export default function MonthlySuggestions() {
    const { id } = useParams();
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const booksPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);

    const user = users[0]; // Assuming you have a single user for simplicity
    const shelves = user.shelves;

    const currentShelfIndex = shelves.findIndex(
        (shelf) => shelf.id === parseInt(id)
    );
    const currentShelf = shelves[currentShelfIndex];

    const [shelfBooks, setShelfBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        const filteredBooks = books.filter((book) =>
            currentShelf.booksIDs.includes(book.id)
        );
        setShelfBooks(books);
        setFilteredBooks(filteredBooks)
    }, []);

    const startIndex = currentPage * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const displayedBooks = shelfBooks.slice(startIndex, endIndex);

    const handleNextPage = () => {
        const totalPages = Math.ceil(shelfBooks.length / booksPerPage);
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        // Reset the focused index when changing pages
        setFocusedIndex(-1);
    };

    const handlePrevPage = () => {
        const totalPages = Math.ceil(shelfBooks.length / booksPerPage);
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
        // Reset the focused index when changing pages
        setFocusedIndex(-1);
    };

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        filterBooks(query);
    };

    const filterBooks = (query) => {
        // Filter books based on selected genres and rating
        console.log(query)
        const filtered = shelfBooks.filter(book => {
            const matchSearchQuery = !query || book.title.toLowerCase().includes(query.toLowerCase());
            return matchSearchQuery;
        });

        setFilteredBooks(filtered);
    };

    const [originalShelfBooks, setOriginalShelfBooks] = useState([]);

    useEffect(() => {
        const filteredBooks = books.filter((book) =>
            currentShelf.booksIDs.includes(book.id)
        );
        setShelfBooks(filteredBooks);
        setOriginalShelfBooks(filteredBooks); // Store the original list
    }, []);

    const handleBookNameChange = (event) => {
        setBookName(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        setBookName("");
        // Filter the original list, not the previously filtered list
        setShelfBooks(
            originalShelfBooks.filter((book) =>
                book.title.toLowerCase().includes(bookName.toLowerCase())
            )
        );
    };

    return (
        <>
            <svg className="invisible absolute inset-0">
            
                <defs>
                    <filter id="paper" x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="1"
                            numOctaves="1"
                            result="noise"
                        />
                        <feDiffuseLighting
                            in="noise"
                            lightingColor="white"
                            surfaceScale="1"
                            result="diffLight"
                        >
                            <feDistantLight azimuth="45" elevation="35" />
                        </feDiffuseLighting>
                    </filter>
                </defs>
            </svg>

            <h1 className="shelf__title">{currentShelf.name}</h1>
            <div className="search-bar-container">
            <div className="search-bar">
            <div className="search-bar">
                        <i className="fas fa-search" aria-hidden="true"></i>
                        <input className="search-bar-input" type="text" placeholder="Search"
                               aria-label="Search"
                               value={searchQuery}
                               onChange={handleSearchChange}/>
                    </div>
            </div>
            </div>
            <div
                role="list"
                style={listContainerStyles}
                className="flex flex-row justify-center space-x-4"
            >
                {filteredBooks.map((book, index) => (
                    <button
                        role="listitem"
                        key={book.title}
                        onMouseEnter={() => {
                            setFocusedIndex(index)
                        }}
                        onMouseLeave={() => {
                            setFocusedIndex(-1)
                        }}
                        onClick={() => {
                            if (index === focusedIndex) {
                                setFocusedIndex(-1);
                            } else {
                                setFocusedIndex(index);
                            }
                        }}
                        className={clsx(
                            "flex shrink-0 flex-row items-center outline-none",
                            focusedIndex !== index &&
                                "hover:-translate-y-4 focus-visible:-translate-y-4",
                            focusedIndex === index ? "basis-60" : "basis-12",
                            animationStyle
                        )}
                        style={{
                            perspective: "1000px",
                            WebkitPerspective: "1000px",
                        }}
                    >
                        <div
                            className={clsx(
                                "z-50 h-full w-[44px] shrink-0 origin-right py-4 brightness-[0.80] contrast-[2.00]",
                                animationStyle
                            )}
                            style={{
                                backgroundColor: book.spineBackgroundColor,
                                color: book.spineForegroundColor,
                                transformStyle: "preserve-3d",
                                height: "18rem", // this is to change the size of the side of the book
                                transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                                    focusedIndex === index ? "-60deg" : "-22deg"
                                }) rotateZ(0deg) skew(0deg, 0deg)`,
                            }}
                        >
                            <span
                                aria-hidden
                                className="pointer-events-none fixed top-0 left-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
                            />
                            <h2
                                className="text-md m-auto font-medium book-spine"
                                style={{ writingMode: "vertical-lr" }}
                            >
                                {book.title}
                            </h2>
                        </div>
                        <div
                            className={clsx(
                                "relative z-10 h-72 shrink-0 origin-left overflow-hidden border-gray-900 brightness-[0.80] contrast-[2.00]",
                                animationStyle
                            )}
                            style={{
                                transformStyle: "preserve-3d",
                                transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                                    focusedIndex === index ? "30deg" : "68deg"
                                }) rotateZ(0deg) skew(0deg, 0deg)`,
                            }}
                        >
                            {/* Media query styles for h2 - The book sidebar names */}
                            <style>
                                {`@media (min-width: 768px) {
                  h2 {
                    font-size: 1rem;
                    line-height: 2.25rem;
                  }
                }`}
                            </style>

                            <span
                                aria-hidden
                                className="pointer-events-none fixed top-0 right-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
                            />
                            <span
                                aria-hidden
                                className="pointer-events-none absolute top-0 left-0 z-50 h-full w-full"
                                style={{
                                    background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,
                                }}
                            />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <Link to={"/books/" + book.id}>
                                <img
                                    src={book.imageUrl}
                                    alt={book.title}
                                    className={clsx(
                                        "h-full w-48 bg-cover",
                                        animationStyle
                                    )}
                                />
                            </Link>
                        </div>
                    </button>
                ))}
            </div>
            <div className="button-container">
            <button
                onClick={handlePrevPage}
                className="px-2 py-2 bg-gray-800 text-white"
                style={{ marginRight: '1rem' }}
            >
                <ChevronLeftIcon className="h-6 w-6" />{" "}
                {/* Left Arrow Icon */}
            </button>
            <button
                onClick={handleNextPage}
                className="px-2 py-2 bg-gray-800 text-white"
                style={{ marginLeft: '1rem' }}
            >
                <ChevronRightIcon className="h-6 w-6" />{" "}
                {/* Right Arrow Icon */}
            </button>
            </div>

            <div className="book-list-shelf-container">
                <hr className="shelf-separator" /> 
                <h3 className="shelf-book-list-h3">Book List:</h3>
                    <BooksList data ={filteredBooks}></BooksList>
            </div>
                
        </>
    );
}
