import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
    data: "apple",
  };
};
// export const set_ProductList = (data) => {
//   console.warn(data, "after api call result");
//   return {
//     type: SET_PRODUCT_LIST,
//     data,
//   };
// };
