import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import imgLogo from "../statics/images/logo.png";

import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { AiFillPhone, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          Moon Course<span></span>
        </h3>
        <div class="logofooter">
          <img src={imgLogo} alt="" />
        </div>

        <p class="footer-links">
      
          <Link to="/">
           Home
          </Link>
          <Link to="/">
            Blog
          </Link>
          <Link to="/">
            About
          </Link>
        </p>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the Moon Course</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
      </div>

      <div class="footer-center">
        <div>
          <ImLocation2 size={25} color={"White"} />
          <p>
            <span>Da Nang , Viet Nam</span>
          </p>
        </div>

        <div>
          <AiFillPhone size={25} color={"White"} />
          <p>0915012166</p>
        </div>

        <div>
          <MdEmail size={25} color={"White"} />
          <p>
            <a href="mailto:mooncourse@edu.com">mooncourse@edu.com</a>
          </p>
        </div>

        <div class="footer-icons">
          <Link to="/home">
            <AiFillLinkedin size={28} />
          </Link>

          <Link to="/home">
            <BsFacebook size={28} />
          </Link>

          <Link to="/home">
            <BsGithub size={28} />
          </Link>

          <Link to="/home">
            <BsYoutube size={28} />
          </Link>
          
        </div>
      </div>
      <hr />
      <div class="footer-bottom-wrapper">
        <span class="footer-bottom-rights">
          {" "}
          - All Rights Reserved by MoonCourse © 2022-{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
