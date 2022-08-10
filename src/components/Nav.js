import React from "react";
import worldIcon from "../img/world.png"

export default function Nav() {
    return(
        <nav>
            <img src={worldIcon} className="nav--icon" alt="world_icon"></img>
            <span className="nav--text">my travel journal.</span>
        </nav>
    )
}