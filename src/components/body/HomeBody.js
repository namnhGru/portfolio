import React from "react";

class HomeBody extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
           <div>
               <p>Nguyễn Hoàng Nam</p> 
               <p>I'm a</p>
               {this.props.skills.map(skill => <p>{skill}</p>)}
           </div> 
        )
    }
}

export default HomeBody;