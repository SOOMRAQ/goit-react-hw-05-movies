import styled from '@emotion/styled';

export const StyledForm = styled.form`
  text-align: center;

  padding-top: 100px;
`;

export const StyledInput = styled.input`
  outline: none;
  padding: 10px;
  min-width: 300px;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-family: inherit;
  background-color: rgba(0, 0, 0, 0.85);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const StyledSearchBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 1px dashed rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.85);
  font-family: inherit;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 500ms ease, color 500ms ease;

  &:hover {
    background-color: rgb(255, 170, 51, 0.5);
    color: white;
  }
`;
