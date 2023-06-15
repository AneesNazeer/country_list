import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./country/countrySlice";
export default configureStore({
  reducer: {
    country: countrySlice,
  },
});
