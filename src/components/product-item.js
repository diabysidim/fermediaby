import React from "react";
import Image from "./image";
import "../styles/product-items.scss"

export default (props)=>{

        return (<div className="product-items-container">
                    
                    <Image width="200px" height="200px" url={props.url}></Image>
                    <div className="product-description">
                        <h2>{props.title}</h2>
                            {props.content}
                    </div>

                </div>)
}