import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   AuthReducerState,
   LoginForm,
   ServerGeneralResponse,
   ServerResponseError,
   SignupForm,
} from '../../../types/types';
import { apiHandlers } from '../api';
import { RootState } from '../store/store';

const initialState: AuthReducerState = {
   isAuthenticated: false,
   status: 'idle',
};

export const getAuthStatus = createAsyncThunk<
   ServerGeneralResponse,
   void,
   { state: RootState }
>('auth/getAuthStatus', async (data, { rejectWithValue }) => {
   try {
      const response = await apiHandlers.get('/authentication');
      if (response.status !== 200) {
         const error = await response.json();
         throw { message: error.message, status: response.status };
      } else {
         const data = await response.json();
         data.status = response.status;
         return data;
      }
   } catch (err) {
      console.error(err);
      return rejectWithValue(err);
   }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
   try {
      const statusCode = await apiHandlers.logout();
      if (statusCode !== 200) {
         throw {
            message: 'Something went wrong. Please try again later.',
            status: statusCode,
         };
      } else {
         return statusCode;
      }
   } catch (err) {
      console.error(err);
      return err;
   }
});

//keep this function alone as passport returns 'unauthorized' in body which is not JSON
export const loginUser = createAsyncThunk<
   ServerGeneralResponse,
   LoginForm,
   { state: RootState }
>('auth/loginUser', async (formData: LoginForm, { rejectWithValue }) => {
   try {
      const { email, password } = formData;
      const response = await apiHandlers.post('/login', {
         username: email,
         password,
      });
      if (response.status !== 200) {
         throw {
            message: 'No matching email and password found.',
            status: response.status,
         };
      } else {
         const data = await response.json();
         data.status = response.status;
         return data;
      }
   } catch (err) {
      console.error(err);
      return rejectWithValue(err) as unknown as ServerResponseError;
   }
});

export const createAccount = createAsyncThunk<
   ServerGeneralResponse,
   SignupForm,
   { state: RootState }
>('auth/createAccount', async (formData: SignupForm, { rejectWithValue }) => {
   try {
      const response = await apiHandlers.post('/signup', formData);
      if (response.status !== 201) {
         const error = await response.json();
         throw { message: error.message, status: response.status };
      } else {
         const data = await response.json();
         data.status = response.status;
         return data;
      }
   } catch (err) {
      console.error(err);
      return rejectWithValue(err) as unknown as ServerResponseError;
   }
});

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      toggleAuthStatus(state, action) {
         state.isAuthenticated = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(loginUser.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(loginUser.fulfilled, (state) => {
            state.status = 'succeeded';
            state.isAuthenticated = true;
         })
         .addCase(loginUser.rejected, (state) => {
            state.status = 'failed';
            state.isAuthenticated = false;
         });
      builder
         .addCase(getAuthStatus.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(getAuthStatus.fulfilled, (state) => {
            state.status = 'succeeded';
            state.isAuthenticated = true;
         })
         .addCase(getAuthStatus.rejected, (state) => {
            state.status = 'failed';
            state.isAuthenticated = false;
         });
      builder
         .addCase(logoutUser.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(logoutUser.fulfilled, (state) => {
            state.status = 'succeeded';
            state.isAuthenticated = false;
         })
         .addCase(logoutUser.rejected, (state) => {
            state.status = 'failed';
            state.isAuthenticated = false;
         });
      builder
         .addCase(createAccount.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(createAccount.fulfilled, (state) => {
            state.isAuthenticated = true;
            state.status = 'succeeded';
         })
         .addCase(createAccount.rejected, (state) => {
            state.status = 'failed';
         });
   },
});

//these will create the action object for us so we can dispatch it
export const { toggleAuthStatus } = authSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectAuth = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthStatus = (state: RootState) => state.auth.status;

//this gets added to store in store.ts
export default authSlice.reducer;
