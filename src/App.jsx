import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}