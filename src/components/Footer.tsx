import React, { FC } from "react";
import {SocialLink, socialLinks} from "../constants/social_links";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map((link: SocialLink) => {
            return <a key={link.id} href={link.url} className="social-link">{link.icon}</a>
          })}
        </div>
        <h4>Copyright &copy; {new Date().getFullYear() + ' '}
        <span>Radek Rozmus</span> all rights reserved
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
