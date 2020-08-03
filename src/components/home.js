import React from "react";
import {Link} from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";

import "../styles/home.scss";


const Home = ()=>{
        const img = ["/image/Goat1.jpg", "/image/vacheblanche.jpeg",  "/image/Goat2.jpg", "/image/poussin1.jpg"]

        return (

                <div>
                    
                    <div className="section" style={{backgroundImage: `url(${"/image/vacheblanche.jpeg"})`}}>
                        <Header></Header>
                        <h1>Ferme Diaby</h1>
                        <div className="overlay"></div>                  
                    </div>

                    <div className="about-section">
                        <h1>A propos</h1>
                        <div>
                            <p>Et ad anim deserunt proident mollit. Cupidatat consequat Lorem qui ut consequat aliquip quis mollit do Lorem tempor cupidatat. 
                            Consequat culpa duis ut duis adipisicing exercitation occaecat et nisi velit excepteur pariatur proident dolore. Ipsum ut ea veniam est dolor.
                            Ad occaecat et Lorem duis amet dolore proident dolore incididunt anim laborum dolore. </p>
                            <Link to="/about"> Plus d'information</Link>                    
                        </div>                        
                    </div>
                    
                    <div className="section" style={{backgroundImage: `url(${img[0]})`}}> 
                        <h1><Link to="/products">Nos produits</Link></h1>
                        <div className="overlay"></div>
                    </div>  
                    
                    <div className="home-gallery">
                        <h1>Gallery</h1>
                        <div>
                            <Image width="250px" height="250px" url={img[0]}></Image>
                            <Image width="250px" height="250px" url={img[1]}></Image> 
                            <Image width="250px" height="250px" url={img[2]}></Image>      
                        </div>
                        <Link to="/gallery">Voir les photos</Link>
                        
                    </div>
                    <div className="section" style={{backgroundImage: `url(${img[2]})`}}>
                        <h1><Link to="/">News</Link></h1>
                        <div className="overlay"></div>                  
                    </div>

                    <Footer></Footer>
                
                </div>

        )

}


export default Home;