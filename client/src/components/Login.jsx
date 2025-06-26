import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { clearItem } from '../mockdata/cartSlice';
import {useDispatch} from "react-redux";
import baseURL from "./baseURL";
const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // useEffect to clear localStorage user data on page load
  const dispatch=useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const cart = localStorage.getItem("cart");

    // If there is a token or user data, remove them from localStorage
    if (token) {
      localStorage.removeItem("accessToken");
      console.log("Token cleared on login page visit");
    }
    if (cart) {
      localStorage.removeItem("cart");
      dispatch(clearItem())
      console.log("User cleared on login page visit");
    }

    // Log the values for debugging
    // console.log("useEffect - Token:", token);
    // console.log("useEffect - User:", cart);

  }, []); // Empty dependency array ensures this runs only once on component mount

  const handlesubmit = (e) => {
    e.preventDefault();
    login();
  }

  const login = () => {
    fetch(`${baseURL}/api/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        console.log("data success", data.accessToken);
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/body");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((error) => console.error("Login error:", error));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
        onSubmit={handlesubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Login
        </button>
        <span>Doesn't have an account?
          <Link to="/signup">Signup</Link>
        </span>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
