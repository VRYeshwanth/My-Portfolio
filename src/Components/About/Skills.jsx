import SkillIcon from "./SkillIcon"

export default function Skills() {
    return (
        <div className="skills-row">
            <div className="heading">
                <h2>Tools and Technologies</h2>
            </div>
            <div className="skills">
                <SkillIcon class="bx bxl-python" name="Python"/>
                <SkillIcon class="bx bxl-java" name="Java"/>
                <SkillIcon class="bx bxl-c-plus-plus" name="C++"/>
                <SkillIcon class="bx bxl-git" name="Git"/>
                <SkillIcon class="bx bxl-html5" name="HTML"/>
                <SkillIcon class="bx bxl-css3" name="CSS"/>
                <SkillIcon class="bx bxl-javascript" name="Javascript"/>
                <SkillIcon class="bx bxl-react" name="React"/>
                <SkillIcon class="bx bxl-postgresql" name="PostgreSQL"/>
                <SkillIcon class="bx bxl-nodejs" name="NodeJS"/>
            </div>
        </div>
    )
}