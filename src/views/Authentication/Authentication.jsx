import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk, createUserThunk } from "../../store/slices/userSlice";
import { selectUser } from "../../store/slices/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import "./Authentication.css";

const Authentication = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoginMode) {
      // Login mode
      if (username && email) {
        dispatch(loginUserThunk({ username, email }));

        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from.pathname);
      } else {
        alert("Please fill in both fields.");
      }
    } else {
      // Signup mode
      if (username && email) {
        dispatch(createUserThunk({ username, email }))
          .unwrap()
          .then(() => {
            navigate("/");
          });
      } else {
        alert("Please fill in all fields.");
      }
    }
  };

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-container">
      <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLoginMode ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={toggleMode} className="toggle-mode">
        {isLoginMode ? "Switch to Sign Up" : "Switch to Login"}
      </p>
    </div>
  );
};

export default Authentication;
