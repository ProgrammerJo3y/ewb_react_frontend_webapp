import './card.css'

export default function Card(props) {
    return(
        <div className="card">
            <div className="cardTitle">{props.title}
            <p>{props.detail} </p>
            </div>
        </div>
    )
}