import React from 'react';
import Item from './Item.js';
const data = [{
  "title": "Food",
  "path": "/root",
  "children": [{
      "title": "Veg",
      "path": "/root/Food",
      "children": [{
          "title": "Carrot",
          "path": "/root/Food/Veg",
          "children": [{
              "title": "Ooty carrot",
              "path": "/root/Food/Veg/Brinjal",
              "children": []
          }]
      }]
  }]
}, {
  "title": "Cloths",
  "path": "/root",
  "children": [{
      "title": "T shirt",
      "path": "/root/Cloths",
      "children": []
  }, {
      "title": "Shirt",
      "path": "/root/Cloths",
      "children": []
  }]
}]

function JsonTree() {

  return(
    <div>
      <ul>
        {data.map(item => <Item list={item}/>)}
      </ul>
    </div>
  )
}

export default JsonTree;