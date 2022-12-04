import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  StyledHeader,
  StyledLogo,
  StyledNavLink,
  StyledNavList,
} from './AppBar.styled';

const navItems = [
  {
    href: '/movies/popular',
    text: 'Popular',
  },
  {
    href: '/movies/top-rated',
    text: 'Top Rated',
  },
  {
    href: '/movies/upcoming',
    text: 'Upcoming',
  },
];

const AppBar = () => {
  return (
    <StyledHeader className="header">
      <NavLink to="/">
        <StyledLogo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          alt="Logo"
        />
      </NavLink>
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
