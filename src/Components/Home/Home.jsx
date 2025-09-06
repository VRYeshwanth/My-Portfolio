import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

export default function Home() {
    return (
        <section className="home" id="home">
            <LeftSection />
            <RightSection />
        </section>
    )
}