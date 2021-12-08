import React from "react";
import { skills } from "./constHelper"
import HeaderBar from "./components/HeaderBar";
import HomeBody from "./components/body/HomeBody";
import FooterBar from "./components/FooterBar";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
           <div>
               <HeaderBar/>
               <HomeBody skills={skills}/>
               <FooterBar />
           </div> 
        )
    }
}

export default Home;