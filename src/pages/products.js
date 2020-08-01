import React from "react";
import ProductItem from "../components/product-item";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/products.scss";


const content = <p>Id ea labore Lorem eiusmod ipsum in. Excepteur occaecat laborum aliqua voluptate ad adipisicing magna id nisi est labore cillum tempor enim. 
Consectetur cupidatat sit est eiusmod mollit. Laborum non in aute dolore in pariatur exercitation sint consectetur sit.
Mollit duis laborum officia ex voluptate. Esse in duis ex anim voluptate anim aute.
Excepteur voluptate cupidatat irure proident incididunt duis laborum nostrud magna do voluptate culpa. 
Do nulla eiusmod ut consectetur velit veniam aliquip ea minim anim excepteur. 
Occaecat non officia adipisicing ipsum sit non aliqua qui dolore velit. 
Labore duis nulla qui eiusmod velit consequat elit fugiat.</p>


export default ()=>{

    const img = [ require("../image/Goat1.jpg"), require("../image/Goat2.jpg"), require("../image/poussin1.jpg")]

    return (<div>
                <Header color="reverse"></Header>
                <div className="products-container">

                    <h1>Nos Produits</h1>
                    <div className="products">
                        <ProductItem url= {img[0]} title="Goat" content={content} ></ProductItem>
                        <ProductItem url= {img[1]} title="Goat2" content={content} ></ProductItem>
                        <ProductItem url= {img[2]} title="Possin" content={content} ></ProductItem>
                    </div>
                    

                </div>
                <Footer></Footer>
        
            </div>)
}


