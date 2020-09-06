import React from "react";
import path from 'path';

import Img from "../styles/home-gallery.module.scss"


export default (props)=>{
        
        return(<div className={Img.img} 
                style={{width:props.width , 
                        height: props.height, 
                        backgroundImage:`url(${props.url})`}}>
                </div>)

}