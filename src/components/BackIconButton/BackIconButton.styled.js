import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;

  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  color: white;
  background-color: rgba(253, 218, 13, 0.5);
  cursor: pointer;
  transition: transform 400ms ease;

  &:hover {
    transform: scale(1.03);
  }
`;
