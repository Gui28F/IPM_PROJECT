import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BrowseAll from "./components/BrowseAll.jsx";
import Filter from "./components/Filter.jsx";
import NewReleases from "./components/NewReleases.jsx";
import MonthlySuggestions from "./components/MonthlySuggestions.jsx";
import MyShelves from "./components/MyShelves.jsx";
import BookDetails from "./components/BookDetails.jsx";
const App = () => {
  return (
    <>
        <BrowserRouter basename="/IPM_PROJECT">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/all" element={<BrowseAll/>}/>
                <Route path="/my_shelves" element={<MyShelves/>}/>
                <Route path="/monthly_suggestions" element={<MonthlySuggestions/>}/>
                <Route path="/new_releases" element={<NewReleases/>}/>
                <Route path="/books/:id" element={<BookDetails />} />
            </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
