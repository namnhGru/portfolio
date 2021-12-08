import React from "react";

class ContactBody extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
           <div>
               <p>Let's make something together!</p> 
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper, ante eget posuere iaculis, felis augue interdum magna, sit amet consectetur nibh neque eget sapien.</p>
               <div>
                   <label>From:</label><input type="text"></input>
                   <textarea></textarea>
               </div>
               <div>
                   {/* chỗ này lưu ý là có thể làm animation thư và hộp thư */}
               </div>
           </div> 
        )
    }
}

export default ContactBody;