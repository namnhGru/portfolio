import React from "react";
import { works } from "../../constHelper"

class WorkBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workNo: 0,
        }
        this.handleWorkChange = this.handleWorkChange.bind(this)
    }

    handleWorkChange(work) {
        this.setState({ workNo: work})
    }

    render() {
        let work = works[this.state.workNo]
        return ( 
           <div>
               <div>
                   <p>{work.name}</p> 
                   <p>{work.description}</p>
                   <img src={works.screenshot}></img>
               </div>
               <div>
                   {works.map((work, i) => <span><button onClick={() => this.handleWorkChange(i)}>{i}</button></span>)} 
               </div>
           </div> 
        )
    }
}

export default WorkBody;