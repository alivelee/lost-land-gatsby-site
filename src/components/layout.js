import React from "react";
import Nav from "./nav";
import styled, { createGlobalStyle } from "styled-components";
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
    transition: background .3s ease-out;
    background: var(--main-color, #f8f8f8);
  }
`;

const SiteWrapper = styled.div`
  min-height: 100vh;
  padding: 2vw;
`;
const Layout = ({ pageTitle, children }) => {
  return (
    <SiteWrapper>
      <ResetStyle />
      <BodyStyle />
      <title>{pageTitle}</title>
      <Nav />
      <main>{children}</main>
    </SiteWrapper>
  );
};

export default Layout;
