import React, { useContext, useState } from 'react';
import Direction from '../Direction';
import DataContext from '../../Datacontext/Datas';
import Directions from '../Directions';
import JusnyDettaills from './Jusrnydettails/JusnyDettaills';

const Sidebar = () => {

  const {data}=useContext(DataContext)

 const [distance, setDistance] = useState(null);
  

    return (
        <div>
  
    
 <div className=''>
<Direction setDistance={setDistance} />
 </div>

 <div>
      <JusnyDettaills distance={distance} ></JusnyDettaills> 
 </div>
     
   

        </div>
    );
};

export default Sidebar;