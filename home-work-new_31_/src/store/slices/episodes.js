import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const episodeSlice = createSlice({
  name: 'episodes',
  initialState: {
    listOfEpisodes: [],
    errorInListOfEpisodes: null,
    info: {},
    page: 1,
  },
  reducers: {
    getListOfEpisodes: (state, action) => {
      state.listOfEpisodes = action.payload;
    },
    setErrInListOfEpisodes: (state, action) => {
      state.errorInListOfEpisodes = action.payload;
    },
    getInfo: (state, action) => {
      state.info = action.payload;
    },
    setNextPage: (state) => {
      state.page += 1;
    },
    setPreviousPage: (state) => {
      state.page -= 1;
    },
  },
});

export const { getListOfEpisodes, setErrInListOfEpisodes, getInfo, setNextPage, setPreviousPage } = episodeSlice.actions;

export const getListOfEpisodesAsync = (page) => async (dispatch) => {
  try {
    const res = await axios.get(`episode?page=${page}`);
    dispatch(getListOfEpisodes(res.data.results));
    dispatch(getInfo(res.data.info));
  } catch (err) {
    dispatch(setErrInListOfEpisodes(err));
  }
};

export default episodeSlice.reducer;
