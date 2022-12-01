// import { useState } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import "../styles/login.css";
import { GoogleLogin } from "react-google-login";
import { FcGoogle } from "react-icons/fc";

const clientID =
  "463573475496-rnvq84ltmnm5ffmpk1786pbl2as1v2j0.apps.googleusercontent.com";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //Login Google
  const onSuccess = (res) => {
    // onChangeInput(res.email)
    // loginSubmit();
    console.log("Login successfully! Current user: ", res.profileObj.name);
    window.location.href = "/home";
  };

  const onFailure = (res) => {
    console.log("Login Fail! res: ", res);
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="loginPage">
      <div>
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={loginSubmit} className="formLogin">
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
            <div className="googleLogin">
              <GoogleLogin
                clientId={clientID}
                buttonText={null}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className="googleButton"
                  >
                    <FcGoogle />
                  </button>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
