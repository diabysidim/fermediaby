
import React from "react";
import Image from "../components/image";
import Layout from "../components/layout";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import "../styles/news-element.scss";

export const query= graphql`query($slug: String!){
        
    contentfulNews(slug:{eq: $slug }){
  
        title
        content{
          json
        }
        createdAt(formatString: "DD MMMM YYYY")
        photo{
            file{
                url
            }
        }
        
      }
        
    }`

export default  (props)=>{

    console.log(props.data)

    return (<Layout color="reverse">

                <div className="news-element__container">

                    <h1>{props.data.contentfulNews.title}</h1>
                    <h2>{props.data.contentfulNews.createdAt}</h2>
                    <div> <Image width="300px" height="300px" url={props.data.contentfulNews.photo? props.data.contentfulNews.photo.file.url: "/image/belier.jpeg"}></Image> </div>
                    <div>{documentToReactComponents(props.data.contentfulNews.content.json)}</div>
                
                </div>
                
        
            </Layout>

       
       
            )
}