import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <div id="page_top"><a href="#"></a></div>
		<div>&copy; 2022 teamらりほー</div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;