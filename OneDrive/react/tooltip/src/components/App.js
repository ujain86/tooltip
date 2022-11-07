import { useState } from 'react';

import Tooltip from './Tooltip';

function App() {


    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const position = 'top';

  return (
    <div className="body">

      <div className='App' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 
        Hover over me! 
      </div>
      
      { isHovering && 
        <Tooltip position={position}/>
      }

    </div>
  );
}

export default App;