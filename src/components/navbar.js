import React from "react";
import icon from "../assets/Cat-N-Dog-Logo.png";
export default function (){
    function displayModel(){
        document.getElementById("contact-form").style.display="block";
    }
    
    return <header className="bodycopy flex-r">
        <div>
            <img src={icon} className="header-icon" alt="" />
        </div>
        <div className="li-items">
            <ul className="flex-r">
                <li className="link-"><a>About</a></li>
                <li className="link-"><a>Blog</a></li>
                <li className="link-"><a onClick={displayModel}>Contact</a></li>
                <li className="link-"><a>Careers</a></li>
            </ul>
        </div>
        
    </header>
}