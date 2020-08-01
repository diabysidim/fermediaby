import  React from  "react";
import GalleryMain from "../components/gallery-main";


export default ()=>{
    const imgArray= ["../image/Goat1.jpg", "../image/Goat2.jpg" , "../image/poussin1.jpg"]
   return <GalleryMain imageUrl={imgArray}></GalleryMain>
}
