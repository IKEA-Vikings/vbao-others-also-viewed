import React from 'react';
import axios from 'axios';

function Carousel(props) {
  console.log('Carousel items list: ', props.items);
  console.log('Carousel items data: ', props.data);
  const products = props.items
    ? props.items.map((product) => {
      const image = props.data.product?.image
        ? <img src={props.data.product.image} />
        : '';

      return (
        <li key={product}>
          <span>Heart icon</span>
          {image}
          <h2>{props.data[product].brand || ''}</h2>
          <h3>{props.data[product].name || ''}</h3>
          <h1>{props.data[product].price || ''}</h1>
          <div>
            <span>{props.data[product].ratingsAverage || ''}</span>
            <span>{props.data[product].ratingsCount || ''}</span>
          </div>
        </li>
      );
    })
    : '';

  return(
    <div>
      <ul>
        {products}
      </ul>
      <div>Items: {props.items}</div>
      <div>Data: {JSON.stringify(props.data)}</div>
    </div>
  );
}

export default Carousel;