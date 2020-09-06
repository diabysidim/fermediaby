
import React from "react";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import "../styles/layout.scss";



export default class Layout extends React.Component{

        constructor(props){

            super(props);
            this.state ={

                sidebare: false
            }

            this.showSidebar = this.showSidebar.bind(this);
        }

        showSidebar(){
            console.log(this.state.sidebare)
            this.setState((st)=>({sidebare: !st.sidebare}))
        }
    

        render(){

            return ( 


                <div className = "layout__container" >           
            
            
                    <div className="layout__main--container">
                        <Header color= {this.props.color} showSidebar={this.showSidebar} sidebare={!this.state.sidebare} ></Header>
                        <div className="layout__main--content"> {this.props.children} </div>   
                        <Footer></Footer>
                    </div>
                    {this.state.sidebare && <Sidebar showSidebar={this.showSidebar} sidebare={this.state.sidebare}  />}
                </div>
            
            )

        }

}