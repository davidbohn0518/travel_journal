import React from "react";
import locPin from "../img/kisspng-google-map-maker-google-maps-computer-icons-pin-5ab9097e1e45d0.617531101522076030124.jpg"

export default function Card(props) {
    return(
    <div className="card--container">
        <img src={`${process.env.PUBLIC_URL}/${props.image}`} className="card--img" alt="card--img" />
        <div className="card--info">
            <p className="card--location"><img src={locPin} className="locPin"></img><h3 className="card--location">{props.location}
            </h3><span>View on Google Maps</span></p>
            <h1 className="card--title">{props.title}</h1>
            <h4 className="card--dates">{`${props.startDate} - ${props.endDate}`}</h4>
            <p className="card--text">{props.description}</p>
        </div>
    </div>)
}