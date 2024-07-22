import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const onSubmit = (data) => {
    if (isLoginMode) {
      dispatch(
        loginUserThunk({
          username: data.username,
          email: data.email,
          password: data.password,
        })
      )
        .unwrap()
        .then(() => {
          const { from } = location.state || { from: { pathname: "/" } };
          navigate(from.pathname);
        });
    } else {
      dispatch(
        createUserThunk({
          username: data.username,
          email: data.email,
          password: data.password,
        })
      )
        .unwrap()
        .then(() => {
          navigate("/");
        });
    }
  };

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
    clearErrors();
  };

  const validatePasswordsMatch = (value) => {
    return value === watch("password") || "Passwords do not match";
  };

  return (
    <div className="auth-container">
      <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            {...register("username", { required: "Username is required" })}
            className={errors.username ? "error" : ""}
          />
          {errors.username && (
            <span className="error-message">{errors.username.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={errors.password ? "error" : ""}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: validatePasswordsMatch,
            })}
            className={errors.confirmPassword ? "error" : ""}
          />
          {errors.confirmPassword && (
            <span className="error-message">
              {errors.confirmPassword.message}
            </span>
          )}
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
