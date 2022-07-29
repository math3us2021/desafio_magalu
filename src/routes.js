import React from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Validation from "./pages/validation.jsx";


export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/validation" element={<Validation />} />
        </Routes>
    );
}