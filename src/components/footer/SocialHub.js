import React from "react";

class SocialHub extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
           <div>
               {this.props.socials.map(site => (
                   <div>
                       <a href={site.address}>
                           <img src={site.logo}></img>
                       </a> 
                   </div>
               ))} 
           </div> 
        )
    }
}

export default SocialHub;