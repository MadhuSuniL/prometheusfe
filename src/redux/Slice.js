import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  responses: {},
  recentAliens: [],
  currentMessageStatus: null
};

export const Slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    addNewResponse: (state, action) => {
      const { alienName, response } = action.payload;
      if (state.responses[alienName]) {
        state.responses[alienName] = [...state.responses[alienName], response];
      } else {
        state.responses[alienName] = [response];
      }
    },
    clearAlienMessages: (state, action) => {
      const { alienName } = action.payload
      state.responses[alienName] = [];
    },
  }
});

export const {
  addNewResponse,
  clearAlienMessages
} = Slice.actions;

export default Slice.reducer;
