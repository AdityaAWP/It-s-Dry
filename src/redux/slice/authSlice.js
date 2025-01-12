import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helper/apiHelper";
import Swal from "sweetalert2";
import { createSlice } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/regiter",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/register", userData);
      Swal.fire({
        icon: "success",
        title: "Register Success",
      });
      return response.data;
    } catch (error) {
      const message =
        error.response.data.name ||
        error.response.data.email ||
        error.response.data.password;
      Swal.fire({
        icon: "error",
        title: "Register Failed",
        text: message,
      });
      return rejectWithValue(message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/login", userData);
      localStorage.setItem("token", response.data.token);
      Swal.fire({
        icon: "success",
        title: "login Success",
      });
      return {
        token: response.data.token,
        data: response.data.data,
      };
    } catch (error) {
      const message = error.response.data.name || error.response.data.password;
      Swal.fire({
        icon: "error",
        title: "login Failed",
        text: message,
      });
      return rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token"),
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.name || action.payload.email;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.name;
      });
  },
});

export default authSlice.reducer;
