import React, { useState } from "react";
import axios from 'axios';
import './Form.css';
import SearchList from './SearchList';

const Form = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
    const newInput = e.target.value;
    axios.get(`https://api.frontendeval.com/fake/food/${newInput}`)
      .then((res) => {
        let newList = [];
        for(let item of res.data){
          console.log(item);
          const obj = { name: item, check: false};
          newList.push(obj);
        }
        setList(newList);
      })
      .catch((err) => {
        alert('failed to get data!');
      })
  }

  return (
    <div className="form-wrapper">
      <form>
        <input
         type="text"
         value={input}
         onChange={handleChange}
         />
      </form>
        <SearchList list={list} set={setList}/>
    </div>
  );
}

export default Form;