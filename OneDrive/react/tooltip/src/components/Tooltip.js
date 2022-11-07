function Tooltip(props) {
    
    var position = props.position;
    console.log(position);
  return (

     <div className="body">
      
         <div className="tooltip" style={{top: -200}} >
             Thanks for hovering! I'm a tooltip
         </div>
    
      </div>
      
  );
}


// import React, { Component } from "react";

// class Tooltip extends Component {
//   render() {
//     return (
//       <div className="body">
//         <div className="tooltip">Thanks for hovering! I'm a tooltip</div>
//       </div>
//     );
//   }
// }

export default Tooltip;

  