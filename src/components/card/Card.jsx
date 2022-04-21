import './card.css'

export default function Card(props) {
    return(
        <div className="card">
            <p className="cardTitle">{props.title}</p>
            <p>{props.detail}</p>
        </div>
    )
}