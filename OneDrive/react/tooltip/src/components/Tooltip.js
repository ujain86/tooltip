function Tooltip(props) {
    
  //Collecting position prop
  var position = props.position;
  
  return (

     <div className="body">
      
         <div className="tooltip" style={{[position]: -200}} >
             Thanks for hovering! I'm a tooltip
         </div>
    
      </div>
      
  );
}

export default Tooltip;

  