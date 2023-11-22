import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";

export const reset = createAction("app/reset");
console.log(reset.toString());

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer
  }
});

const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songSlice.actions.addSong("New Song"));

const finalState = store.getState();
// console.log(JSON.stringify(finalState));

export { store };
// console.log(songSlice.actions.addSong());
export const { addSong, removeSong } = songSlice.actions;
export const { addMovie, removeMovie } = movieSlice.actions;
