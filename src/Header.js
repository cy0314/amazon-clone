import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header__logo"
        alt=""
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option_LineOne">Hello Guest</span>
          <span className="header__option_LineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option_LineOne">Returns</span>
          <span className="header__option_LineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option_LineOne">Your</span>
          <span className="header__option_LineTwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasket />
  <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
