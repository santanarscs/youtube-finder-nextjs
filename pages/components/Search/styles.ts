import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 30px 0;
  /* border: 1px solid #b3b3b3; */
  input {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 1px solid #b3b3b3;
    &:focus {
      border: 1px solid #FACEA8;
    }
  }
  button {
    height: 50px;
    width: 100px;
    border: none;
    background: #F1642B;
    svg {
      color: #FFF;
    }
  }
`;
