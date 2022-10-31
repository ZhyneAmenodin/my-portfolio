import React from "react";
import { Stack } from "@mui/material";
// --------- IMPORTS ------------------
import HomeSection from "./homeSection";
import About from "../aboutMe/about";
import Services from "../services/services";
import Projects from "../projects/projects";
import Footer from "../footer/footer";
// ------------------------------------

export default function Home() {
  return (
    <Stack container>
      <HomeSection />
      <About />
      <Services />
      <Projects />
      <Footer />
    </Stack>
  );
}
