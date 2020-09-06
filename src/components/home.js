import React from "react";
import {Link} from "gatsby";

import Image from "../components/image";

import "../styles/home.scss";
import { useStaticQuery } from "gatsby";




const Home = ()=>{

    const accueille= useStaticQuery(
        graphql`query{
            contentfulImageDaccueille{
  
                photo{
                  file{
                    url
                  }
                }
              }

              contentfulApropos{
  
                content{
                     json
                }
                
              }

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

            contentfulNewsImageDaccueille{
      
                newsImage{
                  file{
                    url
                  }
                }
              }
            
                contentfulProduitsImageDaccueille{
                photo{
                  file{
                    url
                  }
                }
              }

        }` )

    

            
        const img = ["/image/Goat1.jpg", "/image/vacheblanche.jpeg",  "/image/Goat2.jpg", "/image/poussin1.jpg"]

        return (

                <div className="home-container">
                    
                    <div className="section" style={{backgroundImage: `url(${ accueille.contentfulImageDaccueille.photo? 
                        accueille.contentfulImageDaccueille.photo.file.url : "/image/vacheblanche.jpeg"})`}}>
                        <h1>Ranch Nandy Oulimata</h1>
                        <div className="overlay"></div>                  
                    </div>

                    <div className="about-section">
                        <h1>A propos</h1>
                        <div>
                            <p> {accueille.contentfulApropos.content.json.content? accueille.contentfulApropos.content.json.content[0].content[0].value: ""} </p>
                            <Link to="/about"> Plus d'information</Link>                    
                        </div>                        
                    </div>
                    
                    <div className="section" style={{backgroundImage: `url(${accueille.contentfulProduitsImageDaccueille.photo? 
                        accueille.contentfulProduitsImageDaccueille.photo.file.url : img[0]})`}}> 
                        <h1><Link to="/products">Nos produits</Link></h1>
                        <div className="overlay"></div>
                    </div>  
                    
                    <div className="home-gallery">
                        <h1>Gallery</h1>
                       { accueille.allContentfulGalleryPhoto.edges.length>0? <div>
                            {
                                accueille.allContentfulGalleryPhoto.edges.map(edge=>(
                                    
                                    <Image width="250px" height="250px" url={edge.node.photo.file.url}></Image>
                                ))
                            }
                                 
                        </div>:
                    
                        <div>
                            
                            <Image width="250px" height="250px" url={img[0]}></Image>
                            <Image width="250px" height="250px" url={img[1]}></Image> 
                            <Image width="250px" height="250px" url={img[2]}></Image> 
                        
                        </div>}
                        <Link to="/gallery">Voir les photos</Link>
                        
                    </div>
                    <div className="section" style={{backgroundImage: `url(${accueille.contentfulNewsImageDaccueille.newsImage? 
                        accueille.contentfulNewsImageDaccueille.newsImage.file.url : img[2]})`}}>
                        <h1><Link to="/news">News</Link></h1>
                        <div className="overlay"></div>                  
                    </div>

                
                </div>

        )

}


export default Home;