import React, { FC } from "react";
import links from "../constants/links";
import { SocialLink, socialLinks } from "../constants/social_links";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  
  const {isOpen, toggleSidebar} = props;

  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : undefined}>
          {links.map((link: any) => {
            return (
            <li key={link.id}>
              <Link to={link.url} onClick={toggleSidebar}>{link.text}</Link>
            </li>
            );
          })}
        </ul>
        <ul className={isOpen ? "social-links sidebar-icons" : undefined}>
          {socialLinks.map((link: SocialLink) => {
            return (
            <li key={link.id}>
              <a href={link.url} className="social-link">{link.icon}</a>
            </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
