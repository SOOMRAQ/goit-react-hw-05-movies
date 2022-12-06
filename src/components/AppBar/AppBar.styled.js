import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 70px;
  min-height: 80px;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 0 60px;
`;

export const StyledLogo = styled.img`
  width: 50px;
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StyledCompanyTitle = styled(NavLink)`
  display: flex;
  gap: 10px;
  align-items: center;
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
