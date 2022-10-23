import React from "react";
import { Grid, Typography, Stack, Avatar, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// IMGs --------------------------------------
import img1 from "../../assets/lp.svg";
import sys1 from "../../assets/bestea/img2.svg";
import sys2 from "../../assets/bestea/img1.svg";
import sys3 from "../../assets/bestea/img3.svg";
import sys4 from "../../assets/bestea/img4.svg";
// --------------------------------------------
const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(30, 0),
}));

const systemImg = [
  { id: 1, img: sys1 },
  { id: 2, img: sys2 },
  { id: 3, img: sys3 },
  { id: 4, img: sys4 },
];

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

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 10 }}
        >
          <Stack>
            <img
              alt="Me"
              src={img1}
              style={{
                height: 650,
                position: "absolute",
              }}
            />
            <Swiper
              style={{
                height: 321,
                width: 538,
                zIndex: 99,
                marginTop: 98,
                marginLeft: 115,
                marginRight: 30,
                padding: 28,
              }}
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {systemImg.map((img) => (
                <SwiperSlide>
                  <img
                    alt={img.id}
                    src={img.img}
                    style={{ height: 320, width: 560 }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>

          <Grid item direction="column" sx={{ mr: 5 }}>
            <Typography variant="h4" sx={{ ml: 20, color: "white" }}>
              BesTea POS and Inventory System
            </Typography>
            <Typography
              variant="h5"
              sx={{ p: 3, color: "white", textAlign: "justify" }}
            >
              A Point of sale System with an Inventory system designed to
              improve the efficiency of the work flow of restaurant BesTea; the
              client of this project
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
              <Tooltip title="Typescript">
                <Avatar
                  sx={{ p: 1 }}
                  alt="Typescript"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                />
              </Tooltip>
              <Tooltip title="Nest.js">
                <Avatar
                  sx={{ p: 1 }}
                  alt="nestJs"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg"
                />
              </Tooltip>
              <Tooltip title="MySQL">
                <Avatar
                  sx={{ p: 1 }}
                  alt="mysql"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                />
              </Tooltip>
              <Tooltip title="Visual Studio Code">
                <Avatar
                  sx={{ p: 1 }}
                  alt="VScode"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
                />
              </Tooltip>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </RootStyle>
  );
}
