import React, { useContext } from 'react';
import './SearchList.css';
import AppContext from './AppContext';

const SearchList = ({ list, set }) => {
  const { foodList, setFoodList } = useContext(AppContext);

  function handleClick(e, item, index){
    setFoodList([...foodList, item]);
    let current = list;
    list.splice(index, 1);
    set([...current]);
  };


  return(
    <div className='search-wrapper'>
      {list.map((item, i) => (
        <div>
          {item.name}
          <button onClick={(e) => handleClick(e, item, i)}>add</button>
        </div>
      ))}
    </div>
  );
};

export default SearchList;