import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h3> Header</h3>
      <Link to='/login'><button className="btn">Đăng nhập</button></Link>
    </div>
  );
}

export default Header;
