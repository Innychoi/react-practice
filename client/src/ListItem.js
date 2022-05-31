import React, { useState, useContext } from 'react';
import AppContext from './AppContext';

const ListItem = ({ item, index, click}) => {
  const { foodList, setFoodList } = useContext(AppContext);

  function handleCheck() {
    let current = foodList;
    current[index].check = !item.check;
    setFoodList([...current]);
  }

  const fontStyle = {
    color: '#dcdcdc',
    textDecoration: 'line-through',
  }
  return(
    <div stlye={{display: 'flex'}}>
      <button onClick={handleCheck}>{item.check ? 'O' : 'X'}</button>
      {item.check && <p style={fontStyle}>{item.name}</p>}
      {!item.check && <p>{item.name}</p>}
      <button onClick={(e) => click(e, index)}>delete</button>
    </div>
  );
};

export default ListItem;