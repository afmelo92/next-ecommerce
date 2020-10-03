import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 50px;

  img {
    margin: 0 auto;
    height: 210px;
  }

  @media (min-width: 650px) {
    display: flex;

    img {
      height: 350px;
      margin: 0 auto;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 16px;
    padding: 10px 0 0 0;
    margin: 10px;
    height: 60px;
  }

  h2 {
    font-weight: 400;
  }

  p {
    font-weight: 300;
    padding: 10px;
  }

  div {
    display: flex;

    .color-one {
      width: 25px;
      height: 25px;
      background: black;
      margin-right: 10px;
    }

    .color-two {
      width: 25px;
      height: 25px;
      background: yellow;
    }
  }
`;
