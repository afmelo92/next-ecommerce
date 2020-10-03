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
  background: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

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
`;

export const Top3 = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;

  img {
    width: 145px;
  }
`;
