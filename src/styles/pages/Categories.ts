import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 100%;
  width: 100vw;
  background: #121214;

  h1 {
    margin-top: 20px;
    color: #ff1;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 18px;
    top: 30px;
    border: 5px solid #000;
    border-radius: 4px;
    background: #000;

    @media (min-width: 900px) {
      display: none;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${shade(0.2, '#fff')};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;

    .menu-item {
      color: #fff;
      background: none;
      text-decoration: none;
      border: 0;
      padding: 5px;
      font-size: 18px;
      width: 100%;

      &:hover {
        color: ${shade(0.2, '#ff1')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .submenu-item {
      list-style: none;
      padding: 5px 0 5px 30px;
      transition: transform 1.5s ease;
      animation: ${appearFromTop} 1.5s;

      li {
        padding: 2px;

        a {
          text-decoration: none;
          color: #fff;

          &:hover {
            color: ${shade(0.2, '#ff1')};
          }
        }
      }
    }
  }

  /* General sidebar styles */
  .bm-menu {
    background: #000;
    padding: 2.5em 0em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
