import React, { useContext } from 'react';
import Direction from '../Direction';
import DataContext from '../../Datacontext/Datas';
import Directions from '../Directions';

const Sidebar = () => {

  const {data}=useContext(DataContext)


  

    return (
        <div>
  
    
  {data ? <Direction origin={data.origin} destination={data.destination} />:"hello"}

        </div>
    );
};

export default Sidebar;