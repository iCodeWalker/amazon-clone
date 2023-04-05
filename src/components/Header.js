import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/*logo from material ui */}
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_nav__option">
            <span className="header_nav__option_lineone">
              Hello {user ? user?.email : "Guest"}
            </span>
            <spna className="header_nav__option_linetwo">
              {user ? "Sign Out" : "Sign In"}
            </spna>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_nav__option">
            <span className="header_nav__option_lineone">Returns</span>
            <spna className="header_nav__option_linetwo">& Orders</spna>
          </div>
        </Link>

        <div className="header_nav__option">
          <span className="header_nav__option_lineone">your</span>
          <spna className="header_nav__option_linetwo">Prime</spna>
        </div>

        <Link to="/checkout">
          <div className="header_nav_option_basketIcon">
            <ShoppingBasket />
            <span className="header_nav__option_linetwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
