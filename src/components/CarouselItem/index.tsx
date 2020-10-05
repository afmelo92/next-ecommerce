import React from 'react';
import formatValue from '@/utils/formatValue';

import { Container } from './styles';

interface ItemProps {
  source: string;
  name: string;
  price: number;
}

const CarouselItem: React.FC<ItemProps> = ({ source, name, price }) => {
  return (
    <Container>
      <a href="/">
        <img src={source} alt={name} />
        <h3>{name}</h3>
        <h2>{formatValue(price)}</h2>
        <p>
          ou 3x de
          {` ${formatValue(price / 3)}`}
        </p>
      </a>
      <div>
        <div className="color-one" />
        <div className="color-two" />
      </div>
    </Container>
  );
};

export default CarouselItem;
