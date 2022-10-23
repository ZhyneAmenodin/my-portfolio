import React from "react";
import { Grid, Typography, Stack, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// IMGs --------------------------------------
import img1 from "../../assets/lp.svg";
import sys1 from "../../assets/bestea/img2.png";
// --------------------------------------------
const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(30, 0),
}));

const systemImg = [{ id: 1, img: sys1 }];

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
            {systemImg.map((img) => (
              <Swiper
                style={{
                  height: 320,
                  width: 560,
                  zIndex: 99,
                  marginTop: 98,
                  marginLeft: 115,
                  marginRight: 25,
                  padding: 28,
                }}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img alt={img.id} src={img.img} />
                </SwiperSlide>
              </Swiper>
            ))}
          </Stack>

          <Grid item direction="column" sx={{ mr: 5 }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              BesTea POS and Inventory System
            </Typography>
            <Typography
              variant="h5"
              sx={{ pt: 10, color: "white", textAlign: "justify" }}
            >
              A Point of sale System with an Inventory system designed to
              improve the efficiency of the work flow of restaurant BesTea; the
              client of this project
            </Typography>
          </Grid>
        </Stack>
      </Grid>
    </RootStyle>
  );
}
