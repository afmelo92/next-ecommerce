import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import { Container, Main } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Main>
        <div className="container">
          <button type="button" className="hamburger">
            <GiHamburgerMenu size={30} />
          </button>
          <section className="social-row">
            <a href="/">
              <FaFacebook size={20} />
            </a>
            <a href="/">
              <FaInstagram size={20} />
            </a>
            <a href="/">
              <FaTwitter size={20} />
            </a>

            <form>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Pesquisar..."
              />
              <button type="submit">
                <FaSearch size={10} />
              </button>
            </form>
          </section>
          <img src="/logo.png" alt="logo" />
          <div className="icon-row">
            <a href="/">
              <FaUser size={20} />
            </a>
            <a href="/">
              <FiShoppingCart size={25} />
            </a>
          </div>
        </div>
      </Main>
      <section className="search-row">
        <form>
          <input
            type="search"
            placeholder="Pesquisar..."
            name="search"
            id="search"
          />
          <button type="button">
            <FaSearch size={20} />
          </button>
        </form>
      </section>
    </Container>
  );
};

export default Header;
