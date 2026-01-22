
import './App.css'
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from './components/WishlistContext';
import CartPage from './components/CartPage';
import WishlistPage from './components/WishlistPage';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
          <Footer />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
