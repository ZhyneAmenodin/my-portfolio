import React from "react";
import { styled } from "@mui/material/styles";
import bg from "./assets/bg.png";
//---------------------------
import Home from "./pages/home/home";
import Navbar from "./components/Navbar";
import About from "./pages/aboutMe/about";
import Services from "./pages/services/services";
import Projects from "./pages/projects/projects";
import Footer from "./pages/footer/footer";
import Router from "./routes";
//---------------------------
const RootStyle = styled("div")(({ theme }) => ({
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
}));

export default function App() {
  return (
    <RootStyle>
      <Router />
    </RootStyle>
  );
}
