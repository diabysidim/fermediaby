
import React from "react";


class GalleryMain extends React.Component{

        constructor(props){

            super(props);
            this.state = {

                    imgArray: [], currentImage: null
            }

        }

        componentWillMount(){

            let previous =null, current= null, firstImage= null;

            for(let i=0; i< this.props.imageUrl.length; i++){

            
                    previous= current;
                    current = new Image(previous,this.props.imageUrl[i] ,null)
                    if(previous) previous.next = current;
                    else firstImage=current;    
            }

            if(current) current.next = firstImage;
            if(firstImage) firstImage.previous= current;
            this.setState({ currentImage: firstImage}, ()=>{
                console.log("the state changed" + this.state.currentImage)

            })           
        }

        render(){

            return (<div style={{backgroundImage:`url(${this.state.currentImage})`}}>
                        
                    </div>)


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