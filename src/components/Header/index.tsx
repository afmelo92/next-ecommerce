import React from 'react';
import { FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import { Container, Main } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Main>
        <GiHamburgerMenu size={30} />
        <img src="/logo.png" alt="logo" />
        <div className="icon-row">
          <FaUser size={20} />
          <FiShoppingCart size={25} />
        </div>
      </Main>
      <input
        type="search"
        placeholder="Pesquisar..."
        name="search"
        id="search"
      />
    </Container>
  );
};

export default Header;
