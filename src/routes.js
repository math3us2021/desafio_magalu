import React from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Validation from "./pages/validation.js";


export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/validation" element={<Validation />} />
        </Routes>
    );
}