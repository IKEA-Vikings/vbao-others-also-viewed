import React from 'react';
import axios from 'axios';

function Carousel(props) {
  console.log('Carousel items list: ', props.items);
  console.log('Carousel items data: ', props.data);
  return(
    <div>
      <h2>Carousel jesus</h2>
      <div>Items: {props.items}</div>
      <div>Data: {JSON.stringify(props.data)}</div>
    </div>
  );
}

export default Carousel;