// Monthly

import clsx from "clsx";
import { useState } from "react";
import "./MonthlySuggestions.css";
import book11 from '../assets/book_covers/flies_cover.jpg';
import book12 from '../assets/book_covers/seuss_cover.jpg';
import book13 from '../assets/book_covers/dorian_cover.jpg';
import book14 from '../assets/book_covers/quixote_cover.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {Link} from "react-router-dom"; // Import the icons

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

const books = [
  {
    title: "1984",
    coverUrl: "./src/test_images/1984.webp",
    spineBackgroundColor: "#ae2d32",
    spineForegroundColor: "#ffe9a2", // color title
  },
  {
    title: "Steve Jobs",
    coverUrl: "./src/test_images/steve-jobs.webp",
    spineBackgroundColor: "#ffffff",
    spineForegroundColor: "#050505",
  },
  {
    title: "Hitcher's Guide to the Galaxy",
    coverUrl: "./src/test_images/hitchhikers-guide-to-the-galaxy.webp",
    spineBackgroundColor: "#1f7189",
    spineForegroundColor: "#ffffd5",
  },
  {
    title: "The Ascent of Money",
    coverUrl: "./src/test_images/the-ascent-of-money.webp",
    spineBackgroundColor: "#000004",
    spineForegroundColor: "#fffffd",
  },
  {
    title: "Snow Crash",
    coverUrl: "./src/test_images/snow-crash.webp",
    spineBackgroundColor: "#262a57",
    spineForegroundColor: "#fefcff",
  },
  {
    title: "Lord of the Rings",
    coverUrl: "./src/assets/book_covers/lotr_cover.jpg",
    spineBackgroundColor: "#000000",
    spineForegroundColor: "#ffffff",
  }, 
  {
    title: "Dune",
    coverUrl: "./src/assets/book_covers/dune_cover.jpg",
    spineBackgroundColor: "#9E9764",
    spineForegroundColor: "#050505", 
 },
 {
    title : "The Little Prince",
    coverUrl : "./src/assets/book_covers/prince_cover.jpg",
    spineBackgroundColor : "#ffffff",
    spineForegroundColor : "#050505",

 },
 {
    title : "Lord of the Flies",
    coverUrl : book11,
    spineBackgroundColor : "#ffffff",
    spineForegroundColor : "#050505",
 },
 {
    title : "Greend Eggs and Ham",
    coverUrl : book12,
    spineBackgroundColor : "#ffffff",
    spineForegroundColor : "#050505",
 }, 
 {
    title : "The Picture of Dorian Gray",
    coverUrl : book13,
    spineBackgroundColor : "#ffffff",
    spineForegroundColor : "#050505",

 },
 {
    title : "Don Quixote",
    coverUrl : book14,
    spineBackgroundColor : "#ffffff",
    spineForegroundColor : "#050505",
 }
];

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
  };

  const handlePrevPage = () => {
    const totalPages = Math.ceil(books.length / booksPerPage);
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
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
                <Link to={"/books/"+1}>
              <img src={book.coverUrl} alt={book.title} className={clsx("h-full w-48 bg-cover", animationStyle)} />
                </Link>
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4" style={{ transform: 'translateY(25.5rem)' }}>
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


