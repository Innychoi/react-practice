import React, { useState, useMemo } from 'react';
import AppContext from './AppContext.js';
import Form from './Form.js';
import FillForms from './Forms/FillForms.js';
import Zigzag from './zigzag/Zigzag.js';
import Carousel from './Carousel/Carousel.js';
import JsonTree from './jsontree/JsonTree.js';
import Star from './rating/Star.js';
import List from './List.js';

function App() {
  const [milkList, setMilkList] = useState(false);
  const [forms, setForms] = useState(false);
  const [zigzag, setZigZag] = useState(false);
  const [carousel, setCarousel] = useState(false);
  const [json, setJson] = useState(false);
  const [star, setStar] = useState(true);
  const [foodList, setFoodList] = useState([]);

 const value = useMemo(() => (
      {
        foodList,
        setFoodList
      }
    ), [foodList]);

  return (
    <AppContext.Provider value={value} >
    {milkList &&
      <div className="App">
        <Form />
        <List />
      </div>
    }
    {forms &&
      <div className="App">
        <FillForms />
      </div>
    }
    {carousel &&
      <div className="App">
        <Carousel />
      </div>
    }
    {zigzag &&
      <div>
        <Zigzag />
      </div>
    }
    {json &&
      <div>
        <JsonTree />
      </div>
    }
    {star &&
      <div>
        <Star />
      </div>
    }
    </AppContext.Provider>
  );
}

export default App;
