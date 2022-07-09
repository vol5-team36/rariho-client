import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
        </svg>
        
        <div>チームらりほー</div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;