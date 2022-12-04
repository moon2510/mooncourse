
import { Button } from "react-bootstrap";
import "../styles/login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user/register", { ...user });

      localStorage.setItem("checkLogin", true);

      window.location.href = "/login";
    } catch (err) {
      alert(err.response.data.msg);
    
    }
  };

  return (
    <div className="loginPage">
      <div className="login-box">
        <form onSubmit={registerSubmit}>
          <h2>Register</h2>

          <div className="user-box">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={user.name}
              onChange={onChangeInput}
            />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={user.email}
              onChange={onChangeInput}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={user.password}
              onChange={onChangeInput}
            />
            <label>Password</label>
          </div>

          <Button type="submit" className="buttonLogin">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </Button>

          <p id="signup">
            Have a account,{" "}
            <Link
              to="/login"
              className="linkSignup"
              style={{ textDecoration: "none", color: "#21BBBB" }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
