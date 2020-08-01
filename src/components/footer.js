

import React from "react";
import FooterItem from "./footer-item";
import "../styles/footer.scss";

const Footer = ()=>{

    return(

        <div className="footer-container">

            <FooterItem h="Location" p="tomikorobougou, Bamako"></FooterItem>
            <div className="footer-map">
                <iframe style={{width:"100%", height:"100%", frameborder:"0"}}
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAIukEJrvgHpdhGRXYLCa0WokpvEYpdNuY&q=Bamako,+Mali" allowfullscreen>
                </iframe>
            </div>
            <FooterItem  h="Hour" p="Sous rendez-vous"></FooterItem>
        
        </div>
    )
}

export  default Footer;