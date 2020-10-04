import styled, { keyframes } from 'styled-components';
import Carousel from 'react-multi-carousel';
import { shade } from 'polished';

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

export const MainCarrousel = styled(Carousel)`
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const Secure = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  div.container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;

    div.banner {
      display: flex;
      align-items: center;
      color: #000;
      font-size: 14px;

      h3 {
        font-weight: 400;
        margin-bottom: 4px;
      }

      p {
        font-weight: 300;
      }

      svg {
        margin-right: 10px;
        color: #000;
      }
    }
  }
`;

export const Top3 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;

  div {
    display: flex;
    margin: 0 auto;
    max-width: 1200px;

    img {
      width: 100%;
      height: 100%;

      max-width: 500px;
      max-height: 500px;

      :nth-child(2) {
        margin: 0 10px;
      }
    }
  }
`;

export const SpotLight = styled.section`
  display: flex;
  justify-content: center;
  padding: 10px;

  h1 {
    text-align: center;
    font-weight: 300;
  }
`;

export const CarouselContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpotLightCarouselOne = styled(Carousel)`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    font-size: 12px;

    h3 {
      font-weight: 500;
      color: yellow;
      margin-bottom: 10px;
    }

    a {
      text-decoration: none;
      color: #fff;
      margin-bottom: 3px;

      :hover {
        border-bottom: 1px solid #fff;
      }
    }

    p {
      color: #fff;
    }

    svg {
      color: #fff;
    }
  }

  .company {
    margin: 30px 0;
  }

  .account {
    section {
      a {
        margin: 0 5px;
      }
    }
  }

  .support {
    p#email {
      margin: 10px 0;
    }
  }

  .social {
    section {
      display: flex;
      flex-direction: row;

      svg {
        margin: 0 8px;
      }
    }
  }

  .news {
    p + p {
      margin-bottom: 15px;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;

      input {
        background: none;
        padding: 5px;
        border: 0;
        color: #fff;
        border-bottom: 1px solid #fff;
        margin-bottom: 10px;
      }

      button {
        background: yellow;
        border: 0;
        padding: 10px;
        color: #000;
        border-radius: 5px;

        &:hover {
          background: ${shade(0.2, 'yellow')};
        }
      }
    }
  }

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;

    section.container {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin: 50px auto;
      justify-content: center;
    }

    .section {
      margin: 0 20px;
    }

    .account {
      min-width: 100px;
      h3 {
        margin-bottom: 10px;
      }

      section {
        display: flex;
        flex-direction: column;

        a {
          margin-bottom: 5px;
        }
      }
    }

    .social {
      margin-top: 30px;
    }
  }
`;
