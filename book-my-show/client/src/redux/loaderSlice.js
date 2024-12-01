import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loaders", // name of the slice, used for action types
  initialState: {
    loading: false,
  },
  reducers: {
    ShowLoading: (state) => {
      console.log("loading is displayed");
      state.loading = true; // immer js to update the state
    },
    HideLoading: (state) => {
      console.log("loading is finished");
      state.loading = false;
    },
  },
});

export const { ShowLoading, HideLoading } = loaderSlice.actions;
export default loaderSlice.reducer;

/**
 * const showLoading = ShowLoading(); // action creator that creates an action with type ShowLoading and maybe a payload
 */
