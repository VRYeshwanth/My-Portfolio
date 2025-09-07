import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Home />
            <Projects />
            <Footer />
        </div>
    )
}