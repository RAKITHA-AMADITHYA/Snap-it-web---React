import {configureStore } from "@reduxjs/toolkit";

import successMessageSlice from "../reducers/successMessageSlice";




const store = configureStore({
  reducer: {
    success: successMessageSlice,
    
  },
});

export default store;
