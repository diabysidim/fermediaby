import  React from  "react";
import GalleryMain from "../components/gallery-main";
import Layout from "../components/layout";
import imgStyle from "../styles/home-gallery.module.scss";
import { useStaticQuery } from "gatsby";



export default ()=>{



    const data= useStaticQuery(
        graphql`query{
            allContentfulGalleryPhoto{
                edges{
                  node{
                    photo{
                              
                      file{
                        url
                      }
                    }
                  }
                }
              }
        }` )

    const imgArray = data.allContentfulGalleryPhoto.edges.map( edge=>{
            
        return edge.node.photo.file.url
    }


    )

    
    return (<Layout color="reverse">  
                <h1 className={imgStyle.h1}>Gallerie</h1>
                <GalleryMain imageUrl={imgArray}></GalleryMain>
             </Layout>)
}
