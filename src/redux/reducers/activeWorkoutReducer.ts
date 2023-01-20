import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store/store';

interface ActiveWorkoutState {
   showModal: boolean;
   currentAmrapGoal: number;
   isWorkoutActive: boolean;
   timerInSeconds: number;
}
const initialState = {
   showModal: false,
   currentAmrapGoal: 0,
   isWorkoutActive: false,
   timerInSeconds: 0,
} as ActiveWorkoutState;

const activeWorkoutSlice = createSlice({
   name: 'activeWorkout',
   initialState,
   reducers: {
      toggleShowModal(state, action) {
         state.showModal = action.payload;
      },
      subtractFromAmrapGoal(state) {
         if (state.currentAmrapGoal !== 0) {
            state.currentAmrapGoal--;
         }
      },
      addToAmrapGoal(state) {
         state.currentAmrapGoal++;
      },
      setCurrentAmrapGoal(state, action) {
         state.currentAmrapGoal = action.payload;
      },
      beginActiveWorkout(state) {
         if (state.isWorkoutActive) {
         } else {
            let interval;
            state.isWorkoutActive = true;
            interval = window.setInterval(() => {
               state.timerInSeconds++;
            }, 1000);
         }
      },
   },
});

//these will create the action object for us so we can dispatch it
export const {
   toggleShowModal,
   subtractFromAmrapGoal,
   addToAmrapGoal,
   setCurrentAmrapGoal,
   beginActiveWorkout,
} = activeWorkoutSlice.actions;

export const selectActiveWorkoutTimer = (state: RootState) =>
   state.activeWorkout.timerInSeconds;

//this will allow us to get the state when calling useAppSelector
export const selectModalStatus = (state: RootState) =>
   state.activeWorkout.showModal;

export const selectCurrentAmrapGoal = (state: RootState) =>
   state.activeWorkout.currentAmrapGoal;

//this gets added to store in store.ts
export default activeWorkoutSlice.reducer;
