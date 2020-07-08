import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: #fff;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 1px 0 rgba(59, 89, 178, 0.08),
    0 4px 14px rgba(59, 89, 178, 0.06);
  border-radius: 0.5rem;
  border: 0 solid rgba(0, 0, 0, 0.125);
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
