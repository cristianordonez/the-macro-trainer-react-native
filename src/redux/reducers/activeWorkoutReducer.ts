import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store/store';

interface ActiveWorkoutState {
   showModal: boolean;
   currentAmrapGoal: number;
}

const initialState = {
   showModal: false,
   currentAmrapGoal: 0,
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
   },
});

//these will create the action object for us so we can dispatch it
export const {
   toggleShowModal,
   subtractFromAmrapGoal,
   addToAmrapGoal,
   setCurrentAmrapGoal,
} = activeWorkoutSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectModalStatus = (state: RootState) =>
   state.activeWorkout.showModal;

export const selectCurrentAmrapGoal = (state: RootState) =>
   state.activeWorkout.currentAmrapGoal;

//this gets added to store in store.ts
export default activeWorkoutSlice.reducer;
