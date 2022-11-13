import "../App.css";

import { useSelector } from "react-redux";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn(result, "result");
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypGTBtEFR0St-9oSNl3S-HOcNl6MpxYF5Z30cNJM&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
