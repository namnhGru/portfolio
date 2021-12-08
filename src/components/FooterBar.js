import React from "react";
import { socials } from "../constHelper"
import SocialHub from "./footer/SocialHub";

class FooterBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
           <div>
               <SocialHub socials={socials}/>
               <div>
                   <p>Scroll down to see more</p>
               </div>
               <div>
                   <p>Code by React with love</p>
               </div>
           </div> 
        )
    }
}

export default FooterBar;