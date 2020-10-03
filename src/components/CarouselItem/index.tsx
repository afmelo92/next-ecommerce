import React from 'react';

import { Container } from './styles';

interface ItemProps {
  source: string;
  name: string;
  price: number;
}

const CarouselItem: React.FC<ItemProps> = ({ source, name, price }) => {
  return (
    <Container>
      <img src={source} alt={name} />
      <h3>{name}</h3>
      <h2>
        R$
        {price}
      </h2>
      <p>
        ou 3x de
        {`R$ ${(price / 3).toFixed(2)}`}
      </p>
      <div>
        <div className="color-one" />
        <div className="color-two" />
      </div>
    </Container>
  );
};

export default CarouselItem;
