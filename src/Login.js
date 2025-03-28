import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    try {
      console.log("Sending login request to backend...");
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });
      console.log("User logged in:", response.data);
      // Save the token to localStorage or state
      localStorage.setItem("token", response.data.token);
      console.log("Token saved to localStorage");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;