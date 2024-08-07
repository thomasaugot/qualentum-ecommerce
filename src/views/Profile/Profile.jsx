import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserThunk } from "../../store/slices/userSlice";
import { selectUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUserThunk());
    navigate("/");
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
