import styled from 'styled-components';
export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`;
export const Input = styled.input`
  width: 350px;
  height: 28px;
  padding: 0 10px;
  font-size: 15px;
  margin-right: 15px;
  border-radius: 5px;
`;
export const Button = styled.button`
  height: 29px;
  border: 0;
  width: 70px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  :hover {
    background-color: orange;
  }
  transition: all 0.3s;
`;
export const Label = styled.label`
  margin-bottom: 15px;
`;