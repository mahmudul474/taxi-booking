import React, { useContext } from 'react';
import Direction from '../Direction';
import DataContext from '../../Datacontext/Datas';
import Directions from '../Directions';
import JusnyDettaills from './Jusrnydettails/JusnyDettaills';

const Sidebar = () => {

  const {data}=useContext(DataContext)


  

    return (
        <div>
  
    
 <div>
<Direction />
 </div>

 <div>
      <JusnyDettaills ></JusnyDettaills> 
 </div>
     
   

        </div>
    );
};

export default Sidebar;