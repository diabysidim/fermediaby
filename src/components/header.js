import React from "react";
import { Link } from "gatsby";

import Hamburger from "../components/hamburger";

import  "../styles/header.scss";



const Header = (props)=>{

    console.log("sidebar inside", props.sidebare)

    return(

        <div className={"header "+ props.color} >

            <div className="brand" ><Link to="/">Ranch Nandy Oulimata</Link></div>
            {/*<ul >
                <li ><Link to="/about">A propos</Link></li>
                <li ><Link to="/products">Nos Produits</Link></li>
                <li ><Link to="/gallery">Gallerie</Link></li>
                <li ><Link to="/news">News</Link></li>
                <li ><Link to="/contact">Nous Contacter</Link></li>

                
            </ul>*/}

           {props.sidebare && <Hamburger color={props.color +"2"} showSidebar={props.showSidebar}></Hamburger>} 
        
        </div>
    )
}

export  default Header;