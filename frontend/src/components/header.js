import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../statics/images/logo.png";
import "../styles/header.css";

const Header = () => {
  function indicatorInit(navWrapper, indicatorName, navItems) {
    const nav = document.querySelector(navWrapper);
    const indicator = document.querySelector(indicatorName);
    const items = document.querySelectorAll(navItems);

    function indicatorHandler(el) {
      items.forEach((item) => {
        item.classList.remove("active");
        item.removeAttribute("style");
      });
      if (nav.classList.contains("nav1")) {
        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.left = `${el.offsetLeft}px`;
        indicator.style.backgroundColor = el.getAttribute("data-color");
      }

      el.classList.add("active");
      el.style.color = el.getAttribute("data-color");
    }

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        indicatorHandler(e.target);
      });
      item.classList.contains("active") && indicatorHandler(item);
    });
  }

  setTimeout(function () {
    indicatorInit(".nav1", ".nav1 .nav-indicator", ".nav1 .nav-item");
  }, 200);
  return (
    <div>
      <header>
        <div class="logo">
          <img src={imgLogo} alt="" />
        </div>
        <div class="wrapper">
          <nav class="nav nav1">
            <Link to="/home" class="nav-item active" data-color="#663399">
              Home
            </Link>
            <Link to="/about" class="nav-item" data-color="#446A46">
              About
            </Link>
            <Link to="/course" class="nav-item" data-color="#D82148">
              Course
            </Link>
            <Link to="#" class="nav-item" data-color="#FFB72B">
              Blog
            </Link>
            <Link to="#" class="nav-item" data-color="#1C0A00">
              Contact
            </Link>
            <span class="nav-indicator"></span>
          </nav>
        </div>

        <div class="account">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div class="sign">Login</div>
          </Link>

          <div class="sign">
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
