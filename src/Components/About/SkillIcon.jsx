export default function SkillIcon(props) {
    return (
        <div className="skill-icon">
            <i className={props.class}></i>
            <p className="icon-name">{props.name}</p>
        </div>
    )
}