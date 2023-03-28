import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../statics/images/logo.png";
import "../styles/header.css";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Header = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const about = () => {
    window.location.href = "/about";
  };

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
        <div className="logo">
          <img src={imgLogo} alt="" />
        </div>
        <div className="wrapper">
          <nav className="nav nav1">
            <Link to="/course" className="nav-item active" data-color="#D82148">
              Home
            </Link>
            <Link to="#" className="nav-item" data-color="#FFB72B">
              My Course
            </Link>
            <Link to="#" className="nav-item" data-color="#1C0A00">
              About
            </Link>
            <Link to="#" className="nav-item" data-color="#FFB72B">
              Blog
            </Link>
            <Link to="#" className="nav-item" data-color="#1C0A00">
              Contact
            </Link>
            <span className="nav-indicator"></span>
          </nav>
        </div>

        {localStorage.getItem("checkLogin") ? (
          <div className="profile_logout">
            <div className="profile">
              <div className="avt">
                <FaUserAlt size={25} color={"#2b8888"} />
              </div>
              <p> {localStorage.getItem("name")}</p>
            </div>

            <div className="logout">
              <button onClick={logout} className="logoutWrap">
                <RiLogoutCircleRLine size={25} color={"#2b8888"} />
              </button>
            </div>
          </div>
        ) : (
          <div className="account">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="sign">Login</div>
            </Link>

            <Link to="/register" style={{ textDecoration: "none" }}>
              <div className="sign">Register</div>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
