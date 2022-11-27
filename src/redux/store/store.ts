import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../reducers/authReducer';
import modalReducer from '../reducers/modalReducer';
import userGoalsReducer from '../reducers/userGoalsReducer';
import userMetricsReducer from '../reducers/userMetricsReducer';

export const store = configureStore({
   reducer: {
      userMetrics: userMetricsReducer,
      userGoals: userGoalsReducer,
      auth: authReducer,
      modal: modalReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
