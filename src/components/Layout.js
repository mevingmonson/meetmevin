import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import "./layout.css";
// import Dimensions from 'react-dimensions';

// import 'prismjs/themes/prism-solarizedlight.css';
import "prismjs/themes/prism.css";

import Nav from "./../components/Nav";
import Favicon from "./../components/Favicon";

import GlobalStyle from "./GlobalStyle";

const Main = styled.main`
  max-width: 83rem;
  padding: 1em 1em 2em;
  margin: 0 auto;

  @media (min-width: 350px) {
    padding: 1em 1.5em 4em;
  }

  @media (min-width: 520px) {
    padding: 2rem 2em 6rem;
  }
`;

const StyledHeader = styled.header``;

const StyledTitle = styled.h1`
  // margin-bottom: 2rem;
  margin: 0.3em 0;

  @media (min-width: 350px) {
    margin: 0.5em 0 0.2em;
  }

  @media (min-width: 520px) {
    margin: 0.667em 0;
  }
`;

const TitleLink = styled(Link)`
  text-transform: lowercase;
  font-size: 36px;
  color: var(--text-color);
  text-decoration: none;
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #0082cf;
  }
`;

const Layout = ({ children }) => {
  console.log("213");
  return (
    <Main>
      <GlobalStyle />
      <Favicon />

      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Rubik:700"
          rel="stylesheet"
        />
        <title>Mevin G Monson</title>
        <meta property="og:title" content="Mevin G Monson" />
        <meta property="og:description" content="Personal Website" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://rounakvyas.me" /> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Rounak Vyas" />
        <meta name="twitter:description" content="Personal Website" />
        <meta name="twitter:creator" content="@pitsron143" />
      </Helmet>

      <StyledHeader>
        <div className="title-section">
          <StyledTitle>
            <TitleLink to="/">Meet Mevin</TitleLink>
          </StyledTitle>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <div
                className={`theme-btn ${theme === "dark" ? "" : "day"}`}
                onClick={(e) => {
                  toggleTheme(theme === "dark" ? "light" : "dark");
                }}
              >
                <div className={`moon ${theme === "dark" ? "" : "sun"}`}></div>
              </div>
            )}
          </ThemeToggler>
        </div>

        <Nav />
      </StyledHeader>

      {children}
    </Main>
  );
};

export default Layout;
