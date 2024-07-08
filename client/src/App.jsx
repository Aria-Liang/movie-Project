import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../component/Navbar/Navbar';
import Footer from "../component/Footer/Footer";
import LoginSignup from "../pages/LoginSignup.jsx";
import Cart from "../pages/Cart.jsx";
import HomePage from "../pages/HomePage.jsx";
import MovieDetails from "../pages/MovieDetails.jsx";
import SearchResults from "../pages/SearchResult.jsx";
import CartItem from "../component/CartItems/CartItems.jsx";


function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginSignup />}/>
                <Route path="/card" element={<Cart />}/>
                <Route path="/movie/:id" element={<MovieDetails/>} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/fav" element={<CartItem />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;

