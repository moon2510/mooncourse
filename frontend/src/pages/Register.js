// import { useState } from "react";
// import { Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Button } from "react-bootstrap";
import "../styles/login.css";
// const clientID =
//   "463573475496-rnvq84ltmnm5ffmpk1786pbl2as1v2j0.apps.googleusercontent.com";

// function Register() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSuccess = (res) => {
//     console.log("Logout successfully!");
//   };

//   async function registerUser(event) {
//     event.preventDefault();

//     const response = await fetch("http://localhost:5000/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//       }),
//     });

//     const data = await response.json();

//     if (data.status === "ok") {
//       navigate("/login");
//     } else {
//       alert("This Email has been Existed ");
//     }
//   }

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={registerUser}>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           placeholder="Name"
//         />
//         <br />
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="Email"
//         />
//         <br />
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="Password"
//         />
//         <br />
//         <input type="submit" value="Register" />
//       </form>

//       <div id="signOutGoogle">
//         <GoogleLogout
//           clientId={clientID}
//           buttonText="Sign out"
//           onLogoutSuccess={onSuccess}
//         />
//       </div>
//     </div>
//   );
// }

// export default Register;

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

      localStorage.setItem("firstLogin", true);

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
