import React, { FC, useEffect } from "react";
import links from "../constants/links";
import { ISocialLink, socialLinks } from "../constants/social_links";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import COLORS from "../assets/styleHelpers/colors";
import _VAR from "../assets/styleHelpers/styleVariables";
import { slideRight } from "../assets/styleHelpers/animations";
import { sizes } from "../assets/styleHelpers/breakpoints";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarWrapper = styled.aside<{ active: boolean }>`
  background: ${COLORS.grey10};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  transition: ${_VAR.transition};
  opacity: 0;
  transform: translateX(-100%);
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    transform: translateX(0);
    `}
`;

const CloseButton = styled.button`
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: ${COLORS.redDark};
  cursor: pointer;
`;

const SidebarLinks = styled.ul`
  li {
    opacity: 0;
  }
  li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: ${COLORS.grey5};
    letter-spacing: ${_VAR.spacing};
    margin-bottom: 0.5rem;
    font-size: 2rem;
    -webkit-transition: ${_VAR.transition};
    -o-transition: ${_VAR.transition};
    transition: ${_VAR.transition};
    border-radius: ${_VAR.radius};
  }
  li a:hover {
    background: ${COLORS.primary9};
    color: ${COLORS.primary5};
  }
  li {
    -webkit-animation: ${slideRight} 0.5s ease-in-out 1s forwards;
    animation: ${slideRight} 0.5s ease-in-out 1s forwards;
  }
  li:nth-of-type(1) {
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
  }
  li:nth-of-type(2) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  li:nth-of-type(3) {
    -webkit-animation-delay: 0.75s;
    animation-delay: 0.75s;
  }
  li:nth-of-type(4) {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
  li:nth-of-type(5) {
    -webkit-animation-delay: 1.25s;
    animation-delay: 1.25s;
  }
`;

const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  const { isOpen, toggleSidebar } = props;

  return (
    <SidebarWrapper active={isOpen}>
      <CloseButton type="button" onClick={toggleSidebar}>
        <FaTimes />
      </CloseButton>
      <div>
        {isOpen && (
          <SidebarLinks>
            {links.map((link: any) => {
              return (
                <li key={link.id}>
                  <Link to={link.url} onClick={toggleSidebar}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </SidebarLinks>
        )}
        <ul className={isOpen ? "social-links sidebar-icons" : undefined}>
          {socialLinks.map((link: ISocialLink) => {
            return (
              <li key={link.id}>
                <a href={link.url} className="social-link">
                  {link.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
