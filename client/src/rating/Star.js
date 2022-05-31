import React, {useState} from 'react';
import { ReactComponent as EmptyStar } from './src/starempty.svg';
import { ReactComponent as FilledStar } from './src/starfill.svg';

function Star (){
  let array = [1,2,3,4,5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return(
    <div>
      {array.map((star, i) => {
        let rate = hover || rating;
        if(i <= rate){
          return <FilledStar onMouseLeave={()=> setHover(0)} onClick={() => setRating(i)}/>
        }
        return <EmptyStar onMouseEnter={()=> setHover(i)} onMouseLeave={()=> setHover(0)}/>
      })}
    </div>
  )
}

export default Star;
