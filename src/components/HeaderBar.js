import React from "react";
import { navigations } from "../constHelper"
import NavBar from "./header/NavBar";

class HeaderBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
           <div>
               <div>
                   <img src=""></img>
               </div> 
               <NavBar navigations={navigations}/> 
           </div> 
        )
    }
}

export default HeaderBar;