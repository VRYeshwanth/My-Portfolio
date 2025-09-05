export default function Navlinks(props) {
    return (
        <nav className={`nav-links ${props.isOpen ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    )
}