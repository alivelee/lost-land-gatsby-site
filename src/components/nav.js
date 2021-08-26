import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  position: relative;
  white-space: nowrap;
  z-index: 100;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 0 0 -12px;
  padding: 0;
`;

const StyledLink = styled(Link)`
  color: #131313;
  display: block;
  font-weight: 600;
  margin: 0;
  opacity: 0.4;
  padding: 10px 12px;
  text-decoration: none;
`;
const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
