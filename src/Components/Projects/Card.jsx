export default function Card(props) {
    return (
        <div className="card">
            <i className={props.class}></i>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
        </div>
    )
}