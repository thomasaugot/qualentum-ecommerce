import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserAPI,
  editUserAPI,
  deleteUserAPI,
  loginUserAPI,
  logoutUserAPI,
} from "../../api/user";

const getUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null;
  }
};

const initialState = {
  user: getUserFromLocalStorage(),
  isAdmin: getUserFromLocalStorage()
    ? getUserFromLocalStorage().email.endsWith("@admin.com")
    : false,
  users: [],
  loading: false,
  error: null,
};

export const createUserThunk = createAsyncThunk(
  "user/createUser",
  async (userData, thunkAPI) => {
    try {
      const data = await createUserAPI(userData)();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserThunk = createAsyncThunk(
  "user/editUser",
  async ({ userId, userData }, thunkAPI) => {
    try {
      const data = await editUserAPI(userId, userData)();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  "user/deleteUser",
  async (userId, thunkAPI) => {
    try {
      await deleteUserAPI(userId)();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const loginUserThunk = createAsyncThunk(
//   "user/loginUser",
//   async ({ email, username }, thunkAPI) => {
//     try {
//       const data = await loginUserAPI(email, username)();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const loginUserThunk = createAsyncThunk(
  "user/loginUser",
  async ({ email, username }, thunkAPI) => {
    try {
      const userData = { email, username };
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const logoutUserThunk = createAsyncThunk(
//   "user/logoutUser",
//   async (_, thunkAPI) => {
//     try {
//       await logoutUserAPI()();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const logoutUserThunk = createAsyncThunk(
  "user/logoutUser",
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem("user");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload
          : "Failed to create user.";
      })
      .addCase(editUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })
      .addCase(editUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : "Failed to edit user.";
      })
      .addCase(deleteUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.meta.arg);
      })
      .addCase(deleteUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload
          : "Failed to delete user.";
      })
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.loading = false;
        state.user = action.payload;
        state.isAdmin = action.payload.email.endsWith("@admin.com");
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : "Failed to login.";
      })
      .addCase(logoutUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        localStorage.removeItem("user");
        state.loading = false;
        state.user = null;
        state.isAdmin = false;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : "Failed to logout.";
      });
  },
});

// Selectors
export const selectUser = (state) => state.user.user;
export const selectIsAdmin = (state) => state.user.isAdmin;
export const selectAllUsers = (state) => state.user.users;
export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;

export default userSlice.reducer;
