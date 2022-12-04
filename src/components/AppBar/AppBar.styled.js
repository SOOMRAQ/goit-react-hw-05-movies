import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 70px;
  min-height: 80px;
  padding: 0 60px;
`;

export const StyledLogo = styled.img`
  width: 100px;
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  transition: color 500ms ease;
  position: relative;
  padding-bottom: 5px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    width: 0;
    height: 2px;
    background-color: yellow;
    border-radius: 50px;
    transition: width 500ms ease;
  }

  &:hover {
    color: yellow;
  }

  &:hover::after {
    width: 100%;
  }
  &.active {
    color: yellow;
  }
  &.active::after {
    width: 100%;
  }
`;
