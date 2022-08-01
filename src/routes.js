import React from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";



export default function Routers() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
        </Routes>
    );
}