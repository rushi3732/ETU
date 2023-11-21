import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Slice/wizard";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
