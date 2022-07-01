import React from "react";

import {
  AppBar,
  Toolbar,
} from '@mui/material';

const Header = (props) => {

  return (
    <AppBar sx={props.sx} elevation={0} className={props.customClass}>
      <Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
