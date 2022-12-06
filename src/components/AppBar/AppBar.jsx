import React from 'react';
import {
  StyledCompanyTitle,
  StyledHeader,
  StyledLogo,
  StyledNavLink,
  StyledNavList,
} from './AppBar.styled';
import logo from '../../assets/popcorn-war.png';

const navItems = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/movies',
    text: 'Movies',
  },
];

const AppBar = () => {
  return (
    <StyledHeader>
      <StyledCompanyTitle to="/">
        <StyledLogo src={logo} alt="Logo" />
        <p>POPCORN WAR</p>
      </StyledCompanyTitle>
      <nav>
        <StyledNavList>
          {navItems.map(({ href, text }) => (
            <StyledNavLink key={href} to={href}>
              {text}
            </StyledNavLink>
          ))}
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
};

export default AppBar;
