/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
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
import Link from 'next/link';
import { Container, Main } from './styles';
import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <Container>
      <Main>
        <div className="container">
          <button type="button" className="hamburger">
            <GiHamburgerMenu size={30} color="#000" />
          </button>
          <section className="social-row">
            <Link href="https://facebook.com/ntcnaotemcomo">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://instagram.com/oficialnaotemcomo">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://twitter.com/naotemcomo_NTC">
              <FaTwitter size={20} />
            </Link>

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
            <a href="/cart">
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
      <section className="menu-row">
        <Menu />
      </section>
    </Container>
  );
};

export default Header;
