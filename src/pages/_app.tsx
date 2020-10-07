/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Link from 'next/link';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globals';
import 'react-multi-carousel/lib/styles.css';
import 'react-dropdown/style.css';
import { slide as Menu } from 'react-burger-menu';
import { FaCaretDown } from 'react-icons/fa';

// import { Container } from './styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const vestRef = useRef(null);
  const accRef = useRef(null);

  const handleSubMenu = useCallback(refName => {
    refName.current.style.display === 'none'
      ? (refName.current.style.display = 'block')
      : (refName.current.style.display = 'none');
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Menu>
        <Link href="/">
          <a id="home" className="menu-item" href="#Home">
            <div>
              <p>Home</p>
            </div>
          </a>
        </Link>
        <button
          type="button"
          className="menu-item"
          onClick={() => handleSubMenu(vestRef)}
        >
          <div>
            <p>Vestuário</p>
            <FaCaretDown size={20} />
          </div>
        </button>
        <ul ref={vestRef} style={{ display: 'none' }} className="submenu-item">
          <li>
            <Link href="/catalog/categories/camisetas">Camisetas</Link>
          </li>
          <li>
            <a href="/">Calças</a>
          </li>
          <li>
            <a href="/">Bermudas</a>
          </li>
          <li>
            <a href="/">Fitness</a>
          </li>
          <li>
            <a href="/">Moletons</a>
          </li>
          <li>
            <a href="/">Jaquetas Premium</a>
          </li>
          <li>
            <a href="/">Shorts</a>
          </li>
        </ul>
        <button
          type="button"
          id="contact"
          className="menu-item"
          onClick={() => handleSubMenu(accRef)}
        >
          <div>
            <p>Acessórios</p>
            <FaCaretDown size={20} />
          </div>
        </button>
        <ul ref={accRef} style={{ display: 'none' }} className="submenu-item">
          <li>
            <a href="/">Bolsas e Mochilas</a>
          </li>
          <li>
            <a href="/">Bonés</a>
          </li>
          <li>
            <a href="/">Canecas</a>
          </li>
          <li>
            <a href="/">Carteiras</a>
          </li>
          <li>
            <a href="/">Chaveiros, Pins e Pulseiras</a>
          </li>
          <li>
            <a href="/">Chinelo</a>
          </li>
          <li>
            <a href="/">Gorros e Toucas</a>
          </li>
          <li>
            <a href="/">Meias</a>
          </li>
          <li>
            <a href="/">Shoulder Bag</a>
          </li>
          <li>
            <a href="/">Utilitarios de celular</a>
          </li>
        </ul>
        <a id="multi" className="menu-item" href="/">
          <div>
            <p>Multimarcas</p>
          </div>
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <div>
            <p>Contato</p>
          </div>
        </a>
      </Menu>

      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
