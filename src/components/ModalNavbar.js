import { Typography, Grid, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Button } from "@mui/material";
import { TfiClose } from "react-icons/tfi";
import Logo from "../assets/LogoTest.svg";
import "./modalStyle.scss";

export default function ModalNavbar() {
  const [open, setOpen] = useState(false);
  const modalStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setOpen(true)}
      >
        {" "}
        <MenuIcon />{" "}
      </IconButton>

      <Dialog open={open} fullScreen>
        <Stack container sx={{ overflow: "hidden" }} direction="row">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            md={4}
            sx={{ backgroundColor: "black", padding: 2 }}
          >
            <img
              alt="Logo"
              style={{ padding: 4, width: 300, height: 300, display: "flex" }}
              src={Logo}
            />
          </Grid>
          <Grid
            md={8}
            container
            direction="row"
            sx={{ backgroundColor: "black", padding: 2, opacity: "95%" }}
          >
            <Grid container direction="row" md={12} alignItems="center">
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Stencil Std, fantasy",
                  letterSpacing: 5,
                  color: "white",
                  opacity: "80%",
                  flexGrow: 1,
                  ml: 3,
                }}
              >
                Dev Z's Hub
              </Typography>
              <Button onClick={() => setOpen(false)}>
                <div className="iconX">
                  <TfiClose />
                </div>
              </Button>
            </Grid>
            <Grid
              md={12}
              sx={{ margin: 10, backgroundColor: "black", height: "700px" }}
            >
              <Typography variant="h2" sx={{ color: "white" }}>
                Home
              </Typography>
              <Typography variant="h2" sx={{ color: "white" }}>
                {" "}
                Home
              </Typography>
              <Typography variant="h2" sx={{ color: "white" }}>
                {" "}
                Home
              </Typography>
              <Typography variant="h2" sx={{ color: "white" }}>
                {" "}
                Home
              </Typography>
              <Typography variant="h2" sx={{ color: "white" }}>
                {" "}
                Home
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Dialog>
    </>
  );
}
