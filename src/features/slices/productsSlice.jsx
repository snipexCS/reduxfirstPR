import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        state.error = false;
      } catch (err) {
        return err;
      }
    },
   
  },
});
export const { filterProducts, } = productSlice.actions;
export default productSlice.reducer;

// JSON.parse(sessionStorage.getItem("filteredData")) ||
// const savedState = JSON.stringify(filter);
// sessionStorage.setItem("filteredData", savedState);
// cookie localStorage
