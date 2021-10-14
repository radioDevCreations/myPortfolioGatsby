import React, { FC } from "react";
import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import pageLinks from "../constants/links";
import { Link } from "gatsby";
import styled from "styled-components";
import COLORS from "../assets/styleHelpers/colors";
import _VAR from "../assets/styleHelpers/styleVariables";
import { media } from "../assets/styleHelpers/breakpoints";

interface NavbarProps {
  toggleSidebar: () => void;
}

const NavbarWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: ${COLORS.white};

  ${media.tablet4`
  background: transparent;
  `};
`;

const NavbarCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  ${media.tablet2`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  `};
`;

const NavbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-bottom: 0.375rem;
    max-width: 300px;
  }
  ${media.tablet2`
    img {
    max-width: 50%;
  }
  `};
`;

const ToggleButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: ${COLORS.primary5};
  cursor: pointer;
  transition: ${_VAR.transition};
  :hover {
    color: ${COLORS.primary2};
  }

  ${media.tablet2`
  display: none;
  `};
`;

const NavbarLinks = styled.div`
  display: none;
  a {
    margin-right: 2rem;
    text-transform: capitalize;
    color: ${COLORS.grey1};
    font-weight: bold;
    letter-spacing: ${_VAR.spacing};
    transition: ${_VAR.transition};
    padding: 0.5rem 0;
  }
  a:hover {
    color: ${COLORS.primary5};
    box-shadow: 0px 2px ${COLORS.primary5};
  }

  ${media.tablet2`
  display: flex;
  justify-content: flex-end;
  `};
`;

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
  const { toggleSidebar } = props;

  return (
    <NavbarWrapper>
      <NavbarCenter>
        <NavbarHeader>
          <img src={logo} alt="radioDevCreations" />
          <ToggleButton
            type="button"
            className="toggle-btn"
            onClick={toggleSidebar}
          >
            <FaAlignRight />
          </ToggleButton>
        </NavbarHeader>
        <NavbarLinks>
          {pageLinks.map((link: any) => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            );
          })}
        </NavbarLinks>
      </NavbarCenter>
    </NavbarWrapper>
  );
};

export default Navbar;
