import React from 'react';

import stl from './styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={stl.footer}>
     <h3>Saadhit</h3>
     <div className={stl.footerNav}><span>Home</span> <span>Contact Us</span></div>
     <div className={stl.footerSocials}><span>Whatsapp</span> <span>Email</span> </div>
    <div className={stl.footerEnd}>@2023 Saadhit all Rights Reserved || Made by Saadhit Tech Team</div>
    </footer>
  );
};

export default Footer;
