import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Input = styled.input`
  margin: 10px 20px;
`;

export const ButtonAdd = styled.button`
  margin-bottom: 10px;
  width: 50%;
  align-self: center;
  background-color: #46ec8b;
  border: 1px solid #46ec8b;
  border-radius: 5px;
  &:hover,
  &:active {
    background-color: #7171bd;
    border: 1px solid black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
