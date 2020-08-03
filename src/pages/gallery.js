import  React from  "react";
import GalleryMain from "../components/gallery-main";
import Header from "../components/header";
import Footer from "../components/footer";
import imgStyle from "../styles/home-gallery.module.scss";



export default ()=>{

    
    const imgArray= ["/image/belier.jpeg","/image/enclos1.jpeg","/image/Goat1.jpg","/image/Goat1.jpg", "/image/Goat2.jpg" , "/image/poussin1.jpg", "/image/hangard.jpeg", "/image/mur.jpeg", "/image/enclos3.jpeg", "/image/mur2.jpeg"]
   return <div>
                <Header color="reverse"></Header>
                <h1 className={imgStyle.h1}>Gallerie</h1>
                <GalleryMain imageUrl={imgArray}></GalleryMain>
               <Footer></Footer>


    
        </div>
}
