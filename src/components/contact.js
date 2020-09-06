
import React from "react";
import contactStyle from "../styles/contact.module.scss";
class  Contact  extends React.Component{

    constructor(props){

        super(props);
        this.state  = {

                email: {}
        }

        this.handleForm =this.handleForm.bind(this);
    }

    handleForm(e){
        e.preventDefault();
        const email = {... e.target.value}
        this.setState({email})

    }

    render(){

        return (<div className={contactStyle.form}>
                    
                <form onSubmit={this.handleForm}>
                    <div>
                     <label><input type="text" placeholder="First Name" name="firstName" required/></label>
                        <label><input type="text" placeholder="Last Name" name="LastName" required/></label>
                        <label><input  style={{width: "200px"}} type="email" placeholder="Email" name="firstName" required/></label>
                    </div>
                    <div>
                        
                        <label><input style={{width: "300px"}}  type="text" placeholder="Subject" name="Subject" required/></label>
                    </div>
                    
                    <label className={contactStyle.textarea}><textarea placeholder="votre message ..." name="content"></textarea></label>
                    <input className={contactStyle.button} type="submit"/ >
                </form>

            </div>)
    }

}


export default Contact;