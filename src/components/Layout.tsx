import React, { FC, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
// import "normalize.css";
import { Reset } from "styled-reset";
import "../assets/css/main.scss";
import COLORS from "../assets/styleHelpers/colors";
import _VAR from "../assets/styleHelpers/styleVariables";

const GlobalStyle = createGlobalStyle`
  *,
::after,
::before {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family: ${_VAR.fontFamilySecondary};
  background: ${COLORS.white};
  color: ${COLORS.grey1};
  line-height: 1.5;
  font-size: 0.875rem;
  margin-top: 5rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: ${_VAR.spacing};
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: ${_VAR.fontFamilyPrimary};
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: ${COLORS.grey3};
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
    font-weight: 600;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.75rem;
    font-weight: 600;
  }
  h4 {
    font-size: 1rem;
    font-weight: 600;
  }
  body {
    font-size: 1rem;
    font-weight: 600;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
`;

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("toggle sidebar");
  };

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
