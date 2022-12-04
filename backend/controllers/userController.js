const Users = require("../models/user.model");
require('dotenv').config()
// const Payments = require('../models/paymentModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var store = require('store')


const userControllers = {
  register: async (req, res) => {
    try {
      console.log(req.body);
      const { name, email, password } = req.body;

      const user = await Users.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "The email already exists." });

      if (password < 6)
        return res
          .status(400)
          .json({ msg: "Password is at least 6 characters long." });

      // Password Encryption
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        name,
        email,
        password: passwordHash,
      });

      // Save mongodb
      await newUser.save();

      // Then create jsonwebtoken to authentication
      const accesstoken = createAccessToken({ id: newUser._id });

      res.cookie("accesstoken", accesstoken, {
        httpOnly: true,
        path: "/user/accesstoken",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });

      res.json({ accesstoken });
      console.log(res);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {

    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });
      console.log("user", user);
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });

      // If login success , create access token and refresh token
      const accesstoken = createAccessToken({ id: user._id });
      console.log("access",accesstoken);
      res.cookie("accesstoken", accesstoken, {
        httpOnly: true,
        path: "/user/accesstoken",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });


      res.json({ 
        token:accesstoken,
        user: user
     });


     store.set('userID',user._id )
     console.log("hahahah",store);
     console.log("hahahah",store.get('userID'));



    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("accesstoken", { path: "/user/accesstoken" });
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "100m" });
};

module.exports = userControllers;
