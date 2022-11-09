import { useState } from 'react';

import Tooltip from './Tooltip';

function App() {

//Using useState hook to handle hover events by toggling variable 'isHovering'

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const position = 'right';

  return (
    <div className="body">

      <div className='App' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 
        Hover over me! 
      </div>
      
      //if 'isHovering' is true Tooltip pcomponent will render
      { isHovering && 
        <Tooltip position={position}/>
      }

    </div>
  );
}

export default App;