import React from "react";
import Header from "../components/header";
import Image from "../components/image";
import Footer from "../components/footer";
import "../styles/header.scss";
import "../styles/about.scss";



export default ()=>{

    const img= require("../image/pigeon.jpg");
    return (<div>                
                <Header color="reverse"></Header>

                <div className="about-container">
                            <Image width="80%" height="500px" url={img}></Image>
                            <h1>A propos</h1>
                            <p> Qui dolore nostrud laboris aliquip incididunt amet laboris nisi do veniam ea ad. Nisi reprehenderit Lorem ut nulla ea duis in nulla ea. 
                            Sunt eu ea fugiat proident. Sit consequat ipsum et in esse reprehenderit laborum. Culpa dolore veniam dolor sunt et in consequat veniam ex aute sunt deserunt do dolor.
                            Sint anim cillum sunt est veniam ea duis eu non sint. Commodo veniam proident ipsum culpa adipisicing laboris minim deserunt minim commodo. 
                            Qui elit amet in minim reprehenderit consequat mollit incididunt ut irure aliqua fugiat labore velit. 
                            Irure excepteur ut sunt do in dolor in reprehenderit aute anim consectetur. 
                            In tempor et duis magna irure enim nisi qui. Pariatur sunt commodo consectetur amet magna esse voluptate. Pariatur officia dolor esse reprehenderit do excepteur cupidatat consectetur sint cillum ex.
                            Minim consequat exercitation quis exercitation cillum. Ullamco ut anim anim tempor mollit fugiat consectetur sit.</p>
                </div>

                <Footer></Footer>
                
            </div>)
}