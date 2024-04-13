import { LOGO_URL } from "../utils/constants";
import profile from "../../assests/profile.gif";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-white lg:bg-green-100">
      <div className="logo-container">
        <img className="w-36" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅": "⭕"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <img
              className="icon"
              alt="profile-icon"
              src={profile}
              width={20}
              height={20}
            />
          </li>
          <li className="px-4">
            <button className="login-btn" onClick={() => {
              btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
            }}>{btnNameReact}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
