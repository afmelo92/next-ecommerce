import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.ul`
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

  .nav__submenu {
    font-weight: 300;
    text-transform: none;
    display: none;
    position: absolute;
    width: 180px;
    background-color: #000;
  }

  .nav__submenu-item {
    &:hover {
      background: ${lighten(0.2, '#000')};
    }
  }
`;
