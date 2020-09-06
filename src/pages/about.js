import React from "react";
import Image from "../components/image";
import Layout from "../components/layout";
import "../styles/header.scss";
import "../styles/about.scss";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {useStaticQuery} from "gatsby";




export default ()=>{

    const about = useStaticQuery( graphql` query{
       

        contentfulApropos{
            photo{
                file{
                    url
                    }
                 }
                content{
                    json
                }

            }

         
    }` )

  
    const img= about.contentfulApropos? about.contentfulApropos.photo.file.url : "/image/pigeon.jpg";

    return (<Layout color="reverse">  

                <div className="about--container">
                            <h1>A propos</h1>
                            <Image width="80%" height="500px" url={img}></Image>
                            <div>
                                {documentToReactComponents(about.contentfulApropos.content.json)}                            
                            </div>
                </div>            
                
            </Layout>)

    
}