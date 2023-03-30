import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/AdminPage/Admin";
import Checkout from "../Pages/CheckoutPage/Checkout";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/LoginPage/Login";
import Product from "../Pages/ProductPage/Product";
import Signup from "../Pages/SignupPage/Signup";
import SingleProduct from "../Pages/SingleProductPage/SingleProduct";
import Wishlist from "../Pages/WishlistPage/Wishlist";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:ID" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<h1>Sorry Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
