import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
  }
  h1 {
    margin: 10px 0;
  }
  span {
    color: #b3b3b3;
    line-height: 24px;
    text-align: center;
  }
  ul {
    margin: 20px 0;
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      svg {
        margin-bottom: 10px;
      }
    }
  }
`;
