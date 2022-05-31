import React, { useEffect, useState } from 'react';

const Zigzag = () => {
  const [print, setPrint] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);
  const [colIndex, setColIndex] = useState(0);

  function handleChange(e){
    if(e.target.name === "row"){
      setRowIndex(e.target.value);
    } else {
      setColIndex(e.target.value);
    }
  }

  function handleClick(e){
    e.preventDefault();
    createZigzag(Number(rowIndex), Number(colIndex));
  }

  function createZigzag (r, c){
    let matrix = [];
    for(let i = 0; i < r; i++){
      matrix.push([]);
    }
    let arrow = [[1, 0], [-1,0]];
    function addNums(i, row, col, a){
      matrix[row][col] = i;
      if(row === matrix.length-1 && col < c){
        if(col === c-1) return;
        matrix[row][col+1] = i + 1;
        addNums(i+2, row+arrow[1][0], col+1, arrow[1]);
      } else if(row === 0 && 0 < col ){
        if(col === c-1) return;
        matrix[row][col+1] = i + 1;
        addNums(i+2, row+arrow[0][0], col+1, arrow[0]);
      } else {
        addNums(i+1, row+a[0], col+a[1], a);
      }
    }

    addNums(1, 0, 0, arrow[0]);

    setPrint(matrix);
  }

  return(
    <>
      <form>
        <label>row index: </label>
        <input type="text" value={rowIndex} name="row" onChange={handleChange}/>
        <label>col index: </label>
        <input type="text" value={colIndex} name="col" onChange={handleChange}/>
        <button type="submit" onClick={handleClick}>submit</button>
      </form>
      <div>
        {print.length && print.map((row) => {
          let string = row.join(' ');
          return (<div>{string}</div>);
        })}
      </div>
    </>

  )
}

export default Zigzag;
