import { Typography, Grid, Stack, Link } from "@mui/material";
import React from "react";
import { useState } from "react";

import { Link as RouterLink } from "react-router-dom";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Button } from "@mui/material";
import { TfiClose } from "react-icons/tfi";
import Logo from "../assets/LogoTest.svg";
import "./modalStyle.css";
import DialogAnimate from "./DialogAnimate";
import { PATH_PAGE } from "../routes/path";

const LINKS = [
  {
    name: "home",
    href: PATH_PAGE.home,
  },
  {
    name: "about",
    href: PATH_PAGE.about,
  },
];

export default function ModalNavbar() {
  const [open, setOpen] = useState(false);

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
                  <TfiClose className="closeBTN" />
                </div>
              </Button>
            </Grid>
            <Stack
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              md={12}
              spacing={5}
              sx={{ margin: 10, backgroundColor: "black", height: "540px" }}
            >
              <Stack item direction="row" md={12} className="links">
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    mt: 3,
                    paddingX: 4,
                    textDecoration: "underline",
                    opacity: "40%",
                  }}
                >
                  {" "}
                  01
                </Typography>
                <Link
                  variant="h2"
                  sx={{ color: "white", opacity: "80%", letterSpacing: 6 }}
                  underline="none"
                  to="/my-portfolio"
                  component={RouterLink}
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </Stack>
              <Stack item direction="row" md={12} className="links">
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    mt: 3,
                    paddingX: 4,
                    textDecoration: "underline",
                    opacity: "40%",
                  }}
                >
                  {" "}
                  02
                </Typography>
                <Link
                  variant="h2"
                  sx={{ color: "white", opacity: "80%", letterSpacing: 6 }}
                  underline="none"
                  to="/my-portfolio/about"
                  state={{ data: true }}
                  component={RouterLink}
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </Stack>
              <Stack item direction="row" md={12} className="links">
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    mt: 3,
                    paddingX: 4,
                    textDecoration: "underline",
                    opacity: "40%",
                  }}
                >
                  {" "}
                  03
                </Typography>
                <Link
                  variant="h2"
                  sx={{ color: "white", opacity: "80%", letterSpacing: 6 }}
                  underline="none"
                  to="/my-portfolio/services"
                  component={RouterLink}
                  onClick={() => setOpen(false)}
                >
                  Services
                </Link>
              </Stack>
              <Stack item direction="row" md={12} className="links">
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    mt: 3,
                    paddingX: 4,
                    textDecoration: "underline",
                    opacity: "40%",
                  }}
                >
                  {" "}
                  04
                </Typography>
                <Link
                  variant="h2"
                  sx={{ color: "white", opacity: "80%", letterSpacing: 6 }}
                  underline="none"
                  to="/my-portfolio/portfolio"
                  component={RouterLink}
                  onClick={() => setOpen(false)}
                >
                  Portfolio
                </Link>
              </Stack>
              <Stack item direction="row" md={12} className="links">
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    mt: 3,
                    paddingX: 4,
                    textDecoration: "underline",
                    opacity: "40%",
                  }}
                >
                  {" "}
                  05
                </Typography>
                <Link
                  variant="h2"
                  sx={{ color: "white", opacity: "80%", letterSpacing: 6 }}
                  underline="none"
                  to="/my-portfolio/contact"
                  component={RouterLink}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Stack>
      </Dialog>
    </>
  );
}
