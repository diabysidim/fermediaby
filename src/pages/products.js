import React from "react";
import ProductItem from "../components/product-item";
import Layout from "../components/layout";
import "../styles/products.scss";
import {useStaticQuery} from "gatsby";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";




export default ()=>{

    const data= useStaticQuery(

        graphql`query{

            allContentfulProduit{  
                edges{
                node{
                  title
                  body{
                      json
                  }
                  photo{
                    file{
                        url
                    }
                  }
                  
                }
              }
          }
    }`)
    

    return (<Layout color="reverse"> 
                <div className="products-container">

                    <h1>Nos Produits</h1>

                   { data.allContentfulProduit.edges.map( (edge) => (
                        <div className="products">
                                <ProductItem 
                                    url= {edge.node.photo.file.url}
                                    title={edge.node.title} 
                                    content={documentToReactComponents(edge.node.body.json)}>                            
                                </ProductItem>
                                
                        </div>))}
                    
                        
                     
                    

                </div>
             </Layout>)
}


