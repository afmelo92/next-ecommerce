import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #000;

  .search-row {
    form {
      display: flex;

      input {
        flex: 1;
        border: 0;
        border-radius: 0;
        padding: 15px;
      }

      button {
        background: #fff;
        width: 50px;
        border: 0;
        border-left: 1px solid #eee;

        svg {
          color: #aaa;
        }
      }
    }
  }

  @media (min-width: 900px) {
    .search-row {
      display: none;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;

  .icon-row {
    display: flex;
    align-items: center;

    a + a {
      margin-left: 10px;
    }
  }

  div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .social-row {
      display: none;
    }

    .hamburger {
      background: none;
      border: 0;
    }

    img {
      width: 80px;
    }

    svg {
      color: #fff;

      &:hover {
        color: ${darken(0.2, '#fff')};
      }
    }

    @media (min-width: 900px) {
      padding: 5px 30px;

      .social-row {
        display: flex;
        flex-direction: row;
        align-items: center;

        a {
          margin-right: 10px;
        }

        input {
          padding: 2px;
          margin-left: 20px;
          background: none;
          border: 0;
          border-bottom: 1px solid #fff;
          color: #fff;
          width: 200px;
        }

        button {
          width: 30px;
          height: 30px;
          background: #fff;
          border-radius: 50%;
          border: 0;
          margin-left: -10px;

          svg {
            color: #000;
          }
        }
      }

      .hamburger {
        display: none;
      }

      img {
        width: 120px;
        margin-left: -220px;
      }
    }
  }
`;
