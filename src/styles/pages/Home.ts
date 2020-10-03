import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import { shade } from 'polished';

export const Container = styled.div``;

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
`;
