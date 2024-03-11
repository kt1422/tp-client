import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "../components/pages/Home";
import Aboutus from "../components/pages/Aboutus";
import Products from "../components/pages/Products";
import Contactus from "../components/pages/Contactus";

const Router = () => {
    return(
        <Routes>
            <Route index element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/aboutus' element={<Aboutus/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/contactus' element={<Contactus/>} />
        </Routes>
    )
}

export default Router