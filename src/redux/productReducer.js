import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const productData = (data = [], action) => {
  console.warn("PRODUCT_LIST ", action);
  switch (action.type) {
    // case PRODUCT_LIST:
    //   return [action.data];
    case SET_PRODUCT_LIST:
      return [...action.data];

    // case REMOVE_TO_CART:
    //   data.length = data.length ? data.length - 1 : data;
    //   return [...data];

    // case EMPTY_CART:
    //   data = [];
    //   return [...data];

    default:
      return data;
  }
};
