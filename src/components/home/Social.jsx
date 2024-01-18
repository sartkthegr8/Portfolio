import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/sarthak-badola-6686b116b/" className="home__social-icon" target="_blank">
      <i class="bx bxl-linkedin" style={{ fontSize: '40px' }} ></i>
      </a>

      <a href="https://twitter.com/sartk_badola" className="home__social-icon" target="_blank">
        <i class="uil uil-twitter" style={{ fontSize: '40px' }}></i>
      </a>

      <a href="https://www.instagram.com/sarthak_badola07/" className="home__social-icon" target="_blank">
         <i class="uil uil-instagram" style={{ fontSize: '40px' }}></i>
      </a>
    </div>
  );
};

export default Social;
