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
    {data ? <JusnyDettaills ></JusnyDettaills> :"nice data"}
 </div>
     
   

        </div>
    );
};

export default Sidebar;