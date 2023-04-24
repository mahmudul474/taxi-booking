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
 {data ? <Direction origin={data.origin} destination={data.destination} />:"hello"}
 </div>
     
   <div>
    <JusnyDettaills data={data}></JusnyDettaills>
   </div>

        </div>
    );
};

export default Sidebar;