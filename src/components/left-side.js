import React from "react";
import ap from "../assets/AppStoreBadge.svg";
import gp from "../assets/google-play-badge.png";
export default function(){
    return <div className="left-side flex-c">
        <div className="description">
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            <p>Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambeled it to make a type specimen book.</p>
        </div>
        <div className="badges flex-r">
            <img src={ap} alt="Google Play"/>
            <img src={gp}/>
        </div>
    </div>;
}