import React, { useContext} from 'react';
import AppContext from './AppContext';
import ListItem from './ListItem';

const List = ({list, set}) => {
  const { foodList, setFoodList } = useContext(AppContext);


  function handleDelete(e, i) {
    let current = foodList;
    current.splice(i, 1);
    setFoodList([...current]);
  };

  return(
    <div>
      {foodList.map((item, i) => (
        <ListItem item={item} index={i} click={handleDelete}/>
      ))}
    </div>
  )
};

export default List;