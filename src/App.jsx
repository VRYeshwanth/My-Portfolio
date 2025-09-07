import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Footer />
        </div>
    )
}