import React from 'react';

function Item ({ list }){

  return(
    <>
      <li>{list.title}</li>
        {list.children.length !== 0 &&
          <ul>
            {list.children.map(item => <Item list={item} />)}
          </ul>
        }
    </>
  )
}

export default Item;