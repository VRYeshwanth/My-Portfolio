import Navlogo from "./Navlogo"
import Navlinks from "./Navlinks"
import React, {useState} from "react"

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <Navlogo />

            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <i className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}></i>
            </button>

            <Navlinks isOpen={isOpen}/>
        </header>
    )
}