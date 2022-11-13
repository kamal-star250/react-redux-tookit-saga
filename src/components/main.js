import "../App.css";
import { addToCart, removeFromCart, EmptyCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.warn("data in main component", data);
  const user = {
    name: "Samsung",
    price: 10000,
    color: "green",
  };

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(EmptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>
          Get product list
        </button>
      </div>
      <div className="product-container">
        {data?.map((item) => {
          return (
            <div className="product-item" key={item.id}>
              <div>Name:{item.name}</div>
              <div>Brand:{item.brand}</div>
              <div>Price:{item.price}</div>
              <div>Color:{item.color}</div>
              <img src={item.photo} alt="" width="200" height="200" />
              <div>
                <button onClick={() => dispatch(addToCart(item.id))}>
                  Add to Cart
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Main;
