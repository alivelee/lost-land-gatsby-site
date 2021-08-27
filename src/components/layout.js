import React from "react";
import Nav from "./nav";
import styled, { createGlobalStyle } from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";

const ResetStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
const BodyStyle = createGlobalStyle`
  :root {
    --main-color: #f8f8f8;
  } 
  body {
    transition: background .5s ease-out;
    background: var(--main-color, #f8f8f8);
  }
`;

const SiteWrapper = styled.div`
  min-height: 100vh;
  padding: 2vw;
`;

const StyledHeader = styled.header`
  font-size: 1.35rem;
  margin-top: -10px;
  position: relative;
  z-index: 300;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

const Logo = styled.a`
  color: #131313;
  display: block;
  flex-shrink: 0;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1em;
  padding: 10px;
  text-transform: uppercase;
`;

const SocialNav = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  position: relative;
  z-index: 100;
`;
const SocialLink = styled.a`
  color: #131313;
  display: block;
  font-weight: 600;
  margin: 0;
  opacity: 0.4;
  padding: 10px 12px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          insLink
        }
      }
    }
  `);
  console.log('data', data)
  return (
    <SiteWrapper>
      <ResetStyle />
      <BodyStyle />
      <title>{pageTitle}</title>
      <StyledHeader>
        <Nav />
        <Logo>{data?.site?.siteMetadata?.title}</Logo>
        <SocialNav>
          <SocialLink href={data?.site?.siteMetadata?.insLink} target="_blank" title="instagram">
            Instagram
          </SocialLink>
        </SocialNav>
      </StyledHeader>
      <main>{children}</main>
    </SiteWrapper>
  );
};

export default Layout;
