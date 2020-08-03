
import React from "react";

import DImage from "./image";
import imgStyle from "../styles/home-gallery.module.scss";



class GalleryMain extends React.Component{

        constructor(props){

            super(props);
            this.state = {

                    imgArray: [], 
                    currentImage: null
            }

            this.getImgNext = this.getImgNext.bind(this);
            this.getImgPrevious= this.getImgPrevious.bind(this);
            this.displayImage = this.displayImage.bind(this);

        }

        getImgNext(){

            this.setState({currentImage: this.state.currentImage.next })
        }

        getImgPrevious(){

            this.setState({currentImage: this.state.currentImage.previous})
        }


        displayImage(index, e){

            this.setState({currentImage: this.state.imgArray[index]})
        }
        componentDidMount(){

            let previous =null, current= null, firstImage= null, imgArray=[];

            for(let i=0; i< this.props.imageUrl.length; i++){

            
                    previous= current;
                    current = new Image(previous,this.props.imageUrl[i] ,null)
                    if(previous) previous.next = current;
                    else firstImage=current; 
                    imgArray.push(current);
            }

            if(current) current.next = firstImage;
            if(firstImage) firstImage.previous= current;
            this.setState({ currentImage: firstImage, imgArray: imgArray}, ()=>{
                console.log("the state changed" + this.state.currentImage)

            })   

        }

        render(){

                let width= this.props.width? this.props.width : "600px";
                let height = this.props.height? this.props.height : "500px";


                
               return (<div className={imgStyle.container}>

                        <div className={imgStyle.main} style={ {width: width, height: height,  backgroundImage: `url(${ this.state.currentImage && this.state.currentImage.value})`}}> 

                                <button onClick={this.getImgPrevious} className={imgStyle.horizontal}>Left</button>
                                <button onClick={this.getImgNext} className={imgStyle.horizontal}>Right</button>
                        </div>
                        <div className={imgStyle.photos}>
                            {this.state.imgArray.map(imgItem=> {
                                let index = this.state.imgArray.indexOf(imgItem);
                               return <a key={index} style={{cursor:"pointer"}} onClick={(e)=>this.displayImage(index, e)}>
                                    <DImage width="100px" height="100px" url={imgItem.value}></DImage>
                                </a>})}
                        </div>

                </div> )
           


        }

    }
        
export default GalleryMain;

class Image{

    previous;
    value;
    next;

    constructor(previous=null, value=null, next=null ){

        this.previous =previous;
        this.value = value;
        this.next = next;

    }



}