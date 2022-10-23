import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton, Grid } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/LogoTest.svg";
export default function navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgba(0,0,0,.5)" }}>
        <Toolbar>
          <Grid sx={{ display: "flex" }}>
            <img
              alt="Logo"
              style={{ padding: 4, width: 100, height: 80, display: "flex" }}
              src={Logo}
            />
          </Grid>
          <Grid sx={{ display: "flex", ml: 2, flexGrow: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Stencil Std, fantasy",
                letterSpacing: 5,
                color: "white",
                opacity: "65%",
              }}
            >
              Dev Z's Hub
            </Typography>
          </Grid>
          <Grid>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
