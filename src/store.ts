import { configureStore } from '@reduxjs/toolkit';

import goalReducer from './reducers/goalsReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
   reducer: {
      user: userReducer,
      goal: goalReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
