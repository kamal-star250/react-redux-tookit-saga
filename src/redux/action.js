import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("Hello", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const removeFromCart = (data) => {
  console.warn("Hello", data);
  return {
    type: REMOVE_TO_CART,
    data,
  };
};
export const EmptyCart = (data) => {
  console.warn("Hello", data);
  return {
    type: EMPTY_CART,
    data,
  };
};
