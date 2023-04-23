import { pageLinks, socialLinks } from "@/data";
import React from "react";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">

      <PageLinks parentClass="footer-links" itemClass="footer-link"/>

      <ul className="footer-icons">
        { socialLinks.map(link => (<SocialLink key={link.id} itemClass="footer-icon" {...link} /> ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads App - Jed Llenado
        <span id="date">{new Date().getFullYear()}.</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
