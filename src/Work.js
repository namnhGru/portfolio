import React from "react";
import HeaderBar from "./components/HeaderBar";
import WorkBody from "./components/body/WorkBody";

class Work extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
           <div>
               <HeaderBar/>
               <WorkBody /> 
           </div> 
        )
    }
}

export default Work;