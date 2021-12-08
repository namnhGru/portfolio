import React from "react";

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
           <div>
               {this.props.navigations.map(location => (
                   <span>
                       <a href={location.address}>
                           <p>{location.label}</p> 
                       </a> 
                   </span>
               ))} 
           </div> 
        )
    }
}

export default NavBar;