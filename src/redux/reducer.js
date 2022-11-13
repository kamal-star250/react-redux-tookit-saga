import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";
export const cartData = (data = [], action) => {
  console.warn("reducer called ", action);

  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];

    case REMOVE_TO_CART:
      const remainedData = data.filter((item) => item != action.data);
      return [...remainedData];

    case EMPTY_CART:
      data = [];
      return [...data];

    default:
      return data;
  }
};
