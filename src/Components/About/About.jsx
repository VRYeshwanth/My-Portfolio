import Content from "./Content";
import Skills from "./Skills";

export default function About() {
    return (
        <section className="about" id="about">
            <h1>About Me</h1>
            <Content />
            <Skills />
        </section>
    )
}