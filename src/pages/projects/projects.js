import React from "react";
import { Grid, Typography, Stack, Avatar, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import {
  SiQuasar,
  SiTypescript,
  SiNestjs,
  SiMysql,
  SiVisualstudio,
  SiJava,
} from "react-icons/si";
import { DiNetbeans } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import "./image.css";

import ProjectSlide from "../projects/projectSlide";
import ProjectSlide2 from "../projects/projectSlide2";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(30, 0),
}));

export default function Projects() {
  return (
    <RootStyle>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Stack item justifyContent="center" alignItems="center">
          <Typography
            variant="h4"
            sx={{ color: "white", letterSpacing: 4, opacity: "40%" }}
          >
            {" "}
            Portfolio
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 9, letterSpacing: 2, color: "whitesmoke" }}
          >
            Checkout a few of my works
          </Typography>
        </Stack>

        <Swiper
          className="mySwiper swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide style={{ paddingBottom: 15 }}>
            <Stack
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Stack direction="column">
                <ProjectSlide />
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 10, height: "85vh" }}
              >
                <Grid item direction="column" sx={{ mt: 20, mr: 5 }}>
                  <Typography variant="h4" sx={{ ml: 20, color: "white" }}>
                    BesTea POS and Inventory System
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ p: 3, color: "white", textAlign: "justify" }}
                  >
                    A Point of sale System with an Inventory system designed to
                    improve the efficiency of the work flow of restaurant
                    BesTea; the client of this project
                  </Typography>
                  <Grid
                    container
                    justifyContent="flex-end"
                    direction="row"
                    sx={{ mt: 5 }}
                  >
                    <Typography
                      variant="h7"
                      sx={{
                        padding: 2,
                        color: "white",
                      }}
                    >
                      Built using:
                    </Typography>
                    <Tooltip title="Quasar">
                      <div className="icon">
                        <SiQuasar />
                      </div>
                    </Tooltip>
                    <Tooltip title="Typescript">
                      <div className="icon">
                        <SiTypescript />
                      </div>
                    </Tooltip>
                    <Tooltip title="Vue.js">
                      <div className="icon">
                        <FaVuejs />
                      </div>
                    </Tooltip>
                    <Tooltip title="Nest.js">
                      <div className="icon">
                        <SiNestjs />
                      </div>
                    </Tooltip>
                    <Tooltip title="MySQL">
                      <div className="icon">
                        <SiMysql />
                      </div>
                    </Tooltip>
                    <Tooltip title="Visual Studio Code">
                      <div className="icon">
                        <SiVisualstudio />
                      </div>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Stack direction="column">
                <ProjectSlide2 />
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 10, height: "85vh" }}
              >
                <Grid item direction="column" sx={{ mt: 20, mr: 5 }}>
                  <Typography variant="h4" sx={{ ml: 20, color: "white" }}>
                    Dormitory Management System
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ p: 3, color: "white", textAlign: "justify" }}
                  >
                    A System Designed to provide a computerized dormitory
                    management such as room allocations, profiling for student
                    residents, and etc.
                  </Typography>
                  <Grid
                    container
                    justifyContent="flex-end"
                    direction="row"
                    sx={{ mt: 5 }}
                  >
                    <Typography
                      variant="h7"
                      sx={{
                        padding: 2,
                        color: "white",
                      }}
                    >
                      Built using:
                    </Typography>
                    <Tooltip title="Java">
                      <div className="icon">
                        <SiJava />
                      </div>
                    </Tooltip>

                    <Tooltip title="MySQL">
                      <div className="icon">
                        <SiMysql />
                      </div>
                    </Tooltip>
                    <Tooltip title="Netbeans">
                      <div className="icon">
                        <DiNetbeans />
                      </div>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Grid>
    </RootStyle>
  );
}
