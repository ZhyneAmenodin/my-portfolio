import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/LogoTest.svg";
import React, { useState } from "react";
import ModalNavbar from "./ModalNavbar";

export default function Navbar() {
  const [openModal, setOpenModal] = useState();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ zIndex: 999, backgroundColor: "rgba(0,0,0,.5)" }}>
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
            <ModalNavbar />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
