// Monthly

import clsx from "clsx";
import { useState } from "react";
import "./MonthlySuggestions.css";
import book11 from '../assets/book_covers/flies_cover.jpg';
import book12 from '../assets/book_covers/seuss_cover.jpg';
import book13 from '../assets/book_covers/dorian_cover.jpg';
import book14 from '../assets/book_covers/quixote_cover.jpg';

import book15 from '../assets/test_images/1984.webp';
import book16 from '../assets/test_images/steve-jobs.webp';
import book17 from '../assets/test_images/hitchhikers-guide-to-the-galaxy.webp';
import book18 from '../assets/test_images/the-ascent-of-money.webp';
import book19 from '../assets/test_images/snow-crash.webp';
import book20 from '../assets/book_covers/lotr_cover.jpg';
import book21 from '../assets/book_covers/dune_cover.jpg';
import book22 from '../assets/book_covers/prince_cover.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {Link} from "react-router-dom"; // Import the icons
import {monthlySuggestions} from "./Data.jsx";
const listContainerStyles = {
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -35%)',
    width: 'calc((44px + 24px) * 10)',
};

const buttonsContainerStyles = {
    marginTop: '40.5rem', // Adjust the margin as needed
    textAlign: 'center',
  };

let books = monthlySuggestions;

const animationStyle = "transition-all duration-500 ease will-change-auto";

export default function Shelves() {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const booksPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const displayedBooks = books.slice(startIndex, endIndex);

  const handleNextPage = () => {
    const totalPages = Math.ceil(books.length / booksPerPage);
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    // Reser the focused index when changing pages
    setFocusedIndex(-1);
  };

  const handlePrevPage = () => {
    const totalPages = Math.ceil(books.length / booksPerPage);
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    // Reser the focused index when changing pages
    setFocusedIndex(-1);
  };
const buttonsContainerStyles = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '50vh', // Adjust the distance from the bottom as needed
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
};

  return (
    <>
      <svg className="invisible absolute inset-0">
        <defs>
          <filter id="paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="8" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1" result="diffLight">
              <feDistantLight azimuth="45" elevation="35" />
            </feDiffuseLighting>
          </filter>
        </defs>
      </svg>

      <div role="list" style={listContainerStyles} className="flex flex-row justify-center space-x-4">
        {displayedBooks.map((book, index) => (
          <button
            role="listitem"
            key={book.title}
            onClick={() => {
              if (index === focusedIndex) {
                setFocusedIndex(-1);
              } else {
                setFocusedIndex(index);
              }
            }}
            className={clsx(
              "flex shrink-0 flex-row items-center outline-none",
              focusedIndex !== index && "hover:-translate-y-4 focus-visible:-translate-y-4",
              focusedIndex === index ? "basis-60" : "basis-12",
              animationStyle
            )}
            style={{ perspective: "1000px", WebkitPerspective: "1000px" }}
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
                height : "18rem", // this is to change the size of the side of the book
                transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                  focusedIndex === index ? "-60deg" : "0deg"
                }) rotateZ(0deg) skew(0deg, 0deg)`,
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none fixed top-0 left-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
              />
              <h2 className="text-md m-auto font-medium" style={{ writingMode: "vertical-lr" }}>
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
                  focusedIndex === index ? "30deg" : "90deg"
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
                <Link to={"/books/"+book.id}>
              <img src={book.coverUrl} alt={book.title} className={clsx("h-full w-48 bg-cover", animationStyle)} />
                </Link>
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4" style={buttonsContainerStyles}>
        <button onClick={handlePrevPage} className="px-2 py-2 ml-4 bg-gray-800 text-white">
          <ChevronLeftIcon className="h-6 w-6" /> {/* Left Arrow Icon */}
        </button>
        <button onClick={handleNextPage} className="px-2 py-2 mr-4 bg-gray-800 text-white">
          <ChevronRightIcon className="h-6 w-6" /> {/* Right Arrow Icon */}
        </button>
      </div>
    </>
    
  );
}


