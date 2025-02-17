import React, {useState, useEffect} from 'react';
import {Image, Container, Brand, Name, Price, Dollar, Superscript, Reviews, Heart, NumRating} from './style_Card.jsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(fas);
library.add(far);

function Card(props) {
  const [data, setData] = useState(null);
  const [id, setID] = useState(null);

  useEffect(() => {
    setData(props.data);
  }, [id, data, props]);

  let rating = [];
  for (let i = 0; i < Math.ceil(data?.average); i++) {
    if (i + 1 === Math.ceil(data?.average)
      && data?.average - Math.floor(data?.average > 0.1)) {
        rating.push(<FontAwesomeIcon icon={["fas", "star-half"]} size="sm"/>);
      } else {
        rating.push(<FontAwesomeIcon icon={["fas", "star"]} size="sm"/>);
      }
  }

  let cents = ((data?.price) - Math.floor(data?.price)) !== 0
    ? ((data?.price) - Math.floor(data?.price)) * 10
    : '00';

  return (
    <Container key={`card-${id}`}>
      <Heart><FontAwesomeIcon icon={["far", "heart"]} size="1x"/></Heart>
      {data?.image ? <Image src={data?.image} /> : ''}
      <Brand>{data?.brand || 'Brand Name'}</Brand>
      <Name>{`${data?.category}, ${data?.title}` || 'Name'}</Name>
      <Price>
        <Superscript>$</Superscript>
        <Dollar>{Math.trunc(data?.price)}.</Dollar>
        <Superscript>{cents}</Superscript>
      </Price>
      <Reviews>
        <span>{rating}</span>
        <NumRating>({data?.number || '0'})</NumRating>
      </Reviews>
    </Container>
  );
}

export default Card;