

import React from 'react';
import {Link} from "gatsby";
import newsStyle from  "../styles/news.module.scss";

export default (props)=>{

    return <div className={newsStyle.newsItem} 
                style={{backgroundImage:`url(${props.photo})`}}>       

                <Link to={"/news/" + props.link}>

                    <div>
                        <h2>{props.title}</h2>
                        <h3>{props.date}</h3>
                    </div>
                    
                </Link>
        </div>
}