import React from 'react';
import Link from 'next/link';

import formatValue from '@/utils/formatValue';

import { Container } from './styles';

interface ItemProps {
  source: string;
  name: string;
  price: number;
  slug: string;
}

const CarouselItem: React.FC<ItemProps> = ({ source, name, price, slug }) => {
  return (
    <Link href={`/catalog/products/${encodeURIComponent(slug)}`}>
      <Container>
        <img src={source} alt={name} />
        <h3>{name}</h3>
        <h2>{formatValue(price)}</h2>
        <p>
          ou 3x de
          {` ${formatValue(price / 3)}`}
        </p>
        <div>
          <div className="color-one" />
          <div className="color-two" />
        </div>
      </Container>
    </Link>
  );
};

export default CarouselItem;
