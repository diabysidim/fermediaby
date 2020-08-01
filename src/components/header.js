import React from "react";
import { Link } from "gatsby";

import  "../styles/header.scss";

const Header = (props)=>{

    return(

        <div className={"header "+ props.color} >

            <div ><Link to="/">Ferme Diaby</Link></div>
            <ul >
                <li ><Link to="/about">A propos</Link></li>
                <li ><Link to="/products">Nos Produits</Link></li>
                <li ><Link to="/#">Gallerie</Link></li>
                <li ><Link to="/#">News</Link></li>
                <li ><Link to="/#">Nous Contacter</Link></li>

                
            </ul>
        
        </div>
    )
}

export  default Header;