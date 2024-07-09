import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUser,
  editUser,
  deleteUser,
  loginUser,
  logoutUser,
} from "../api/user";

const useUserActions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createNewUser = async (newUser) => {
    try {
      setLoading(true);
      await dispatch(createUser(newUser));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const modifyUser = async (userId, user) => {
    try {
      setLoading(true);
      await dispatch(editUser(userId, user));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeUser = async (userId) => {
    try {
      setLoading(true);
      await dispatch(deleteUser(userId));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, username) => {
    try {
      setLoading(true);
      await dispatch(loginUser(email, username));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await dispatch(logoutUser());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createNewUser,
    modifyUser,
    removeUser,
    login,
    logout,
  };
};

export default useUserActions;
