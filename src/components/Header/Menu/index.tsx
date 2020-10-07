import React, { useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Container } from './styles';
import Submenu from './Submenu';

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHover = useCallback(() => {
    setShowMenu(true);
  }, []);

  const handleLeave = useCallback(() => {
    setShowMenu(false);
  }, []);

  return (
    <Container>
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item" onMouseLeave={handleLeave}>
            <a href="/" onMouseEnter={handleHover}>
              Vestuario
            </a>
            <CSSTransition
              in={showMenu}
              transitionName="slide"
              classNames="slide"
              timeout={300}
              unmountOnExit
            >
              <div className="submenu-container">
                {showMenu && (
                  <Submenu
                    itemNames={[
                      'BERMUDAS',
                      'CALÇAS',
                      'CAMISETAS',
                      'CORTA VENTO',
                      'FITNESS',
                      'JAQUETA PREMIUN',
                      'MOLETONS',
                      'SHORTS',
                    ]}
                  />
                )}
              </div>
            </CSSTransition>
          </li>
          <li className="nav__menu-item">
            <a href="/" onMouseEnter={handleHover}>
              Acessórios
            </a>
            <CSSTransition
              in={showMenu}
              transitionName="slide"
              classNames="slide"
              timeout={300}
              unmountOnExit
            >
              <div className="submenu-container">
                {showMenu && (
                  <Submenu
                    itemNames={[
                      'BOLSAS E MOCHILAS',
                      'BONÉS',
                      'CANECAS',
                      'CARTEIRAS',
                      'CHAVEIROS, PINS E PULSEIRAS',
                      'CHINELO',
                      'GORROS E TOUCAS',
                      'MEIAS',
                      'SHOULDER BAG',
                      'UTILITÁRIO DE CELULAR',
                    ]}
                  />
                )}
              </div>
            </CSSTransition>
          </li>
          <li className="nav__menu-item">
            <a href="/" onMouseEnter={handleHover}>
              Multimarcas
            </a>
            <CSSTransition
              in={showMenu}
              transitionName="slide"
              classNames="slide"
              timeout={300}
              unmountOnExit
            >
              <div className="submenu-container">
                {showMenu && (
                  <Submenu itemNames={['VESTUÁRIO', 'ACESSÓRIOS']} />
                )}
              </div>
            </CSSTransition>
          </li>
          <li className="nav__menu-item">
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Menu;
