import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  responses: {
    "Zorgon": [
      {
        query: 'Hi My name is madhu',
        success: true,
        content: 'Hi nice to meet you madhu'
      },
      {
        query: 'Hi My name is madhu',
        success: true,
        content: 'Hi nice to meet you madhu'
      },
      {
        query: 'Hi My name is madhu',
        success: true,
        content: 'Hi nice to meet you madhu'
      },
      {
        query: 'Hi My name is madhu',
        success: true,
        content: 'Hi nice to meet you madhu'
      },
      {
        query: 'Hi My name is madhu',
        success: true,
        content: 'Hi nice to meet you madhu'
      },
      {
        query: 'Hi My name is madhu',
        success: true,
        content: 'Hi nice to meet you madhu'
      },
      {
        query: 'Hi My name is madhu',
        success: true,
        content: 'Hi nice to meet you madhu'
      },
      {
        query: 'Hi My name is madhu',
        success: true,
        content: 'Hi nice to meet you madhu'
      },
      {
        query: 'Hi My name is madhu',
        success: true,
        content: 'Hi nice to meet you madhu'
      },
      {
        query: 'Hi My name is madhu',
        success: true,
        content: 'OK',
      }
    ]
  },
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
