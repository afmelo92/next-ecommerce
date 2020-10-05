import React from 'react';

import { Container } from './styles';

interface Props {
  itemNames: string[];
}

const Submenu: React.FC<Props> = ({ itemNames }) => {
  return (
    <Container className="nav__submenu">
      {itemNames &&
        itemNames.map(item => (
          <li className="nav__submenu-item">
            <a href="/">{item}</a>
          </li>
        ))}
    </Container>
  );
};

export default Submenu;
