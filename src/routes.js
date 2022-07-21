import React from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "./pages/home.js";


export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}