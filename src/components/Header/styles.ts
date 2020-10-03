import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border: 0;
    border-radius: 0;
    padding: 15px;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 15px;

  img {
    width: 80px;
    margin-left: 15px;
  }

  .icon-row {
    display: flex;
    align-items: center;

    svg + svg {
      margin-left: 15px;
    }
  }
`;
