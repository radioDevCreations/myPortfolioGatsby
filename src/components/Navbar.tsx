import React, { FC } from "react";
import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import pageLinks from "../constants/links";
import { Link } from "gatsby";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
  
  const {toggleSidebar} = props

  return (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="web dev" />
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight />
        </button>
      </div>
      <div className="nav-links">
        {pageLinks.map((link: any) => {
          return (
          <Link key={link.id} to={link.url}>
            {link.text}
          </Link>
          );
        })}
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
