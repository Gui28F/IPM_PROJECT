import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test from "./components/Test.jsx";
const App = () => {
  return (
    <>
        <BrowserRouter basename="/">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/discovery" element={<Test/>}/>
                <Route path="/my_shelves" element={<Test/>}/>
                <Route path="/monthly_suggestions" element={<Test/>}/>
                <Route path="/all" element={<Test/>}/>
                <Route path="/new_releases" element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
