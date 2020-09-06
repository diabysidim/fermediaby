import React, {useState} from "react";
import "../styles/hamburger.css";

export default (props)=>{


    return (
     
        <div id="hamburger" className={props.sidebare?"hamburger-icon-container hamburger-active":"hamburger-icon-container"} 
        onClick={props.showSidebar}>
            <span className={"hamburger-icon " + props.color}></span>
        </div>
    )
}