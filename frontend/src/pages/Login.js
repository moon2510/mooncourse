// import { useState } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import "../styles/login.css";
import GoogleLogin from "react-google-login";
import FacebookLogin from "@greatsumini/react-facebook-login";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const userLogin = await axios.post("/user/login", { ...user });
      if (userLogin.data.user) {
        localStorage.setItem("checkLogin", true);
        localStorage.setItem("user", userLogin.data.user);
        localStorage.setItem("name", userLogin.data.user.name);
        localStorage.setItem("email", userLogin.data.user.email);
        localStorage.setItem("role", userLogin.data.user.role);
        localStorage.setItem("id", userLogin.data.user._id);
        localStorage.setItem("token", userLogin.data.token);
      } else {
        localStorage.setItem("checkLogin", false);
      }
      console.log("ABCDEF", userLogin);

      if (localStorage.getItem("role") === "learner") {
        window.location.href = "/";
      } else {
        window.location.href = "/lecturer";
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const loginWithFacebook = async (response) => {
    try {
      const facebookLogin = await axios.post("/user/loginFacebook", {
        ...response,
      });
      console.log(facebookLogin);
      if (facebookLogin.data.user) {
        localStorage.setItem("checkLogin", true);
        localStorage.setItem("user", facebookLogin.data.user);
        localStorage.setItem("name", facebookLogin.data.user.name);
        localStorage.setItem("email", facebookLogin.data.user.email);
        localStorage.setItem("role", facebookLogin.data.user.role);
        localStorage.setItem("id", facebookLogin.data.user._id);
      } else {
        localStorage.setItem("checkLogin", false);
      }
      console.log("ABCDEF", facebookLogin);

      if (localStorage.getItem("role") === "learner") {
        console.log("Role", user.role);
        window.location.href = "/";
      } else {
        window.location.href = "/lecturer";
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="loginPage">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={loginSubmit} className="formLogin">
          <div className="user-box">
            <input
              type="email"
              name="email"
              required
              placeholder=""
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
              placeholder=""
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
            Login
          </Button>
          <p id="signup">
            Don’t have a account,{" "}
            <Link
              to="/register"
              className="linkSignup"
              style={{ textDecoration: "none", color: "#21BBBB" }}
            >
              Register
            </Link>
          </p>
        </form>
        <div className="orgray">
          <div className="ortwo">
            <hr width="100%" size="1px" align="left" color="gainsboro" />
          </div>
          <div className="or">Or</div>
          <div className="ortwo">
            <hr width="100%" size="1px" align="left" color="gainsboro" />
          </div>
        </div>
        <div className="social">
          <div className="facebooklogin">
            <FacebookLogin
              appId="621744609751436"
              onFail={(error) => {
                console.log("Login Failed!", error);
              }}
              onProfileSuccess={(response) => loginWithFacebook(response)}
            />
          </div>
        </div>
        <div className="social">
          <div className="facebooklogin">
            <GoogleLogin
            // appId="621744609751436"
            // onFail={(error) => {
            //   console.log("Login Failed!", error);
            // }}
            // onProfileSuccess={(response) => loginWithFacebook(response)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
