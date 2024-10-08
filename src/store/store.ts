import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";

const store = configureStore({
  reducer: {
    todolist: reducer,
  },
});

export default store;
