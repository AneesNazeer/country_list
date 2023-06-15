import { createSlice } from "@reduxjs/toolkit";

let countrySlice = createSlice({
  name: "country",
  initialState: [],
  reducers: {
    addCountry: (state, action) => {
      try {
        let item = action.payload;
        return (state = item);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export const { addCountry } = countrySlice.actions;
export default countrySlice.reducer;
