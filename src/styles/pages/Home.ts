import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

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
