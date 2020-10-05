import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  /*
  Slide animation styles

  You may need to add vendor prefixes for transform depending on your desired browser support.
*/

  .slide-enter {
    transform: translateY(-100%);
    transition: 0.3s cubic-bezier(0, 1, 0.5, 1);

    &.slide-enter-active {
      transform: translateY(0%);
    }
  }

  .slide-leave {
    transform: translateY(0%);
    transition: 0.3s ease-in-out;

    &.slide-leave-active {
      transform: translateY(-100%);
    }
  }

  /*
  CSS for the submenu container, needed to adjust the behaviour to our needs.
  Try commenting out this part to see how the animation looks without the container involved.
*/

  .submenu-container {
    height: 200px;
    min-width: 200px;
    position: absolute;
    overflow: hidden;
    margin-top: 3px;
    z-index: -1;
  }

  /*
  Layout styles.

  I like to work on stuff that's good looking so I remixed a cool simple menu by Mike Rojas (thanks!): https://codepen.io/mikerojas87/pen/rojKb
*/

  .menu-container {
    text-align: center;
  }

  nav {
    ul {
      list-style: none;
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .nav {
    display: inline-block;
    margin: 0.2rem auto 0;
    background: #fff;
    text-align: left;

    a {
      color: #000;
      text-decoration: none;

      display: block;
      padding: 0 16px;
      line-height: inherit;
      cursor: pointer;
    }
  }

  .nav__menu {
    line-height: 30px;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
  }

  .nav__menu-item {
    display: inline-block;
    position: relative;
    padding: 7px 0 7px;

    &:hover {
      background-color: #000;

      a {
        color: #ff1;
      }

      .nav__submenu {
        display: block;
      }

      .submenu-container {
        z-index: 10;
      }
    }
  }

  .nav__submenu {
    font-weight: 300;
    font-size: 12px;
    text-transform: none;
    display: none;
    position: absolute;
    width: 280px;
    background-color: #000;
  }

  .nav__submenu-item {
    &:hover {
      background: ${lighten(0.2, '#000')};
    }
  }
`;
