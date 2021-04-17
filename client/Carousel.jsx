import React, {useState, useEffect} from 'react';
import Card from './Card.jsx';
import {Container} from './style_Carousel.jsx';

function Carousel(props) {
  const [items, setItems] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setItems(props.items);
    setData(props.data);
  }, [items, data, props]);

  const products = items
    ? items.map((itemID) => {
      return <Card key={`carousel-${itemID}`} id={itemID} data={data[itemID]} />
    })
    : '';

  return(
    <Container>
      {products}
    </Container>
  );
}

export default Carousel;