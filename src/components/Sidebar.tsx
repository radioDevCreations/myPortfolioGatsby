import React, { FC } from "react";
import links from "../constants/links";
import { SocialLink, socialLinks } from "../constants/social_links";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarWrapper = styled.aside<{ active: boolean }>`
  background: var(--clr-grey-10);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    transform: translateX(0);
    `}
`;

const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  const { isOpen, toggleSidebar } = props;

  return (
    <SidebarWrapper active={isOpen}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : undefined}>
          {links.map((link: any) => {
            return (
              <li key={link.id}>
                <Link to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className={isOpen ? "social-links sidebar-icons" : undefined}>
          {socialLinks.map((link: SocialLink) => {
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
