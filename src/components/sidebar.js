import React from "react";
import {Link} from "gatsby"
import "../styles/sidebar.scss";
import Hamburger from "./hamburger";

export default (props)=> (

    <div className="layout__sidebar">
       
    <Hamburger  showSidebar={props.showSidebar} sidebare={props.sidebare}></Hamburger>
    <div className="layout__sidebar--content">

        <h1>Menu</h1>
        <ul className="sidebar--content__ul">
            <li ><Link to="/" activeStyle={{color:"grey"}}>Accueille</Link></li>        
            <li ><Link to="/about" activeStyle={{color:"grey"}}>A propos</Link></li>
            <li ><Link to="/products" activeStyle={{color:"grey"}}>Nos Produits</Link></li>
            <li ><Link to="/gallery" activeStyle={{color:"grey"}}>Gallerie</Link></li>
            <li ><Link to="/news" activeStyle={{color:"grey"}} >News</Link></li>
            <li ><Link to="/contact" activeStyle={{color:"grey"}} >Nous Contacter</Link></li>
        </ul>

        <p>Copyright © 2020 Sidi Diaby</p>
    </div>
        

        
    </div>
)