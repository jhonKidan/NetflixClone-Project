import React from 'react'
import "./header.css";
import Logo from "../../assets/images/Logo.png"
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img src={Logo} alt="Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TVshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li><SearchIcon /></li>
            {/* <li>NotificationIcon</li>
            <li>AccountBoxIcon</li>
            <li>DropDownIcon</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header