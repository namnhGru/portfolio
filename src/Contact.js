import React from "react";
import HeaderBar from "./components/HeaderBar";
import ContactBody from "./components/body/ContactBody";

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
           <div>
               <HeaderBar />
               <ContactBody />
           </div> 
        )
    }
}

export default Contact;