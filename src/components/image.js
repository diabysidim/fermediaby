import React from "react";

import Img from "../styles/home-gallery.module.scss"


export default (props)=>{
        
        console.log(props);
        return(<div className={Img.img} style={{width:props.width , height: props.height, backgroundImage:`url(${props.url})`}}> </div>)

}