import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  AccountCircle as AccountIcon,
  Menu as MenuIcon,
  ArrowDropDownCircleOutlined as ArrowDownIcon,
} from "@mui/icons-material";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <AppBar position="absolute">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="h1"
          fontSize="18px"
          fontFamily="heebo"
          fontWeight={700}
          sx={{ flexGrow: 1 }}
        >
          Accel4
        </Typography>
        <Typography variant="h6" component="h1" fontSize="14px" fontFamily="heebo" fontWeight={400}>
          Richard Charles
        </Typography>
        <IconButton size="large" color="inherit" aria-label="profile">
          <AccountIcon fontSize="large" />
        </IconButton>
        <IconButton size="small" color="inherit" aria-label="profile">
          <ArrowDownIcon fontSize="small" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
