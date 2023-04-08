import React from 'react';
import "./Header.css";
import { IconButton } from "@material-ui/core";
import { Forum } from "@material-ui/icons";

import PersonIcon from '@material-ui/icons/Person';
function Header() {
  return (
    <div className="header">
        
        <IconButton>
            <PersonIcon fontSize="large" />
        </IconButton>

        <img className="header__logo" src="logo192.png" alt="header" />
        <IconButton>
            <Forum fontSize="large" className="header__icon" />
        </IconButton>
    </div>

  )
}

export default Header
