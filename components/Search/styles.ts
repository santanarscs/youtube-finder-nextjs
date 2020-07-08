import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 30px 0;
  input {
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 0.5rem;
    margin-right: 10px;
    border: 0 solid rgba(0, 0, 0, 0.125);
    box-shadow: 0 0 1px 0 rgba(59, 89, 178, 0.08),
                0 4px 14px rgba(59, 89, 178, 0.06);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:focus {
      box-shadow: 0 14px 28px  rgba(59, 89, 178, 0.08),
                  0 10px 10px  rgba(59, 89, 178, 0.06);
    }
  }
  button {
    height: 50px;
    width: 100px;
    border: none;
    background: #557cf2;
    border-radius: 0.5rem;
    svg {
      color: #FFF;
    }
  }
`;
