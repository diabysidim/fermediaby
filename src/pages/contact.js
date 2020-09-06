import React from "react";
import Layout from "../components/layout";
import Contact from "../components/contact";
import contactStyle from "../styles/contact.module.scss";

export default (props)=>{
    return(<Layout color="reverse">     
            
            <h1 className={contactStyle.h1}>Nous Contacter</h1>
            <Contact></Contact>
           
        </Layout>)
     


}