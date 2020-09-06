import React from "react";

export default (props)=>{

    return (<div className="footer--info">
                    <h1>{props.h}</h1>
                    {props.p.map( p => (<p>{p}</p>))}
            </div>)
}