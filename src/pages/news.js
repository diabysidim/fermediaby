import React from "react";
import Layout from "../components/layout";
import NewsItem from '../components/news-item';

import newsStyle from  "../styles/news.module.scss";
import { useStaticQuery } from "gatsby";



export default (props)=>{

    const data= useStaticQuery(
                graphql`query{
                    
                    allContentfulNews{
  
                        edges{
                          node{
                            title
                            slug
                            createdAt(formatString: "DD MMMM YYYY")
                            content{
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
                }
                    ` )

            console.log(data)

    return (<Layout color="reverse">  
                <h1 className={newsStyle.h1}>News</h1>
                <div className={newsStyle.newsContainer}>
                
                {data.allContentfulNews.edges.map( edge => ( 

                    <NewsItem 
                        title={edge.node.title}
                        date={edge.node.createdAt}
                        photo={edge.node.photo? edge.node.photo.file.url : "/image/belier.jpeg"}
                        link={edge.node.slug} 
                        >
                </NewsItem>))}
                </div>
             </Layout>)
}