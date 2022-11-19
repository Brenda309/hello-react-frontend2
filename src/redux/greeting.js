import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH = 'hello-react-front-end/FETCH';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const greetingReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH:
      return action.payload.data.text;
    default:
      return state;
  }
};

export const loadData = createAsyncThunk(
  FETCH,
  async (_, { dispatch }) => {
    const res = await axios.get('http://localhost:3000/api/v1/greetings', config)
      .then(
        (data) => dispatch({
          type: FETCH,
          payload: data,
        }),
      );
    return res;
  },
);

export default greetingReducer;
