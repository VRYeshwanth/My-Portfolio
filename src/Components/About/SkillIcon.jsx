import React, {useState} from "react"

export default function SkillIcon(props) {
    const [hovered, setHovered] = useState(false);
    return (
        <div className={`skill-icon ${hovered ? "hovered" : ""}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <i className={props.class}></i>
            {hovered && <p className="icon-name">{props.name}</p>}
        </div>
    )
}