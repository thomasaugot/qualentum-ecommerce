import {
  CREATE_USER,
  EDIT_USER,
  DELETE_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "../actions/actionsTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAdmin: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).email.endsWith("@admin.com")
    : false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        isAdmin: action.payload.email.endsWith("@admin.com"),
      };
    case LOGOUT_USER:
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        isAdmin: false,
      };
    case CREATE_USER:
      return { ...state, users: [...state.users, action.payload] };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;

export const selectUser = (state) => state.user.user;
export const selectIsAdmin = (state) => state.user.isAdmin;
export const selectAllUsers = (state) => state.user.users;
