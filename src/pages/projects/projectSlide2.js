import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Stack, Avatar, Tooltip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./image.css";

// IMGs --------------------------------------

import img1 from "../../assets/lp.svg";
import sys1 from "../../assets/bestea/img2.svg";
import sys2 from "../../assets/bestea/img1.svg";
import sys3 from "../../assets/bestea/img3.svg";
import sys4 from "../../assets/bestea/img4.svg";

// --------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(5, 0),
}));
export default function ProjectSlide2() {
  const systemImg = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
    },
  ];

  return (
    <RootStyle>
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
            width: 510,
            zIndex: 99,
            marginTop: 98,
            marginLeft: 138,
            marginRight: 40,
            padding: 28,
          }}
          modules={[Autoplay]}
          spaceBetween={60}
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
                style={{ height: 320, width: 560, objectFit: "contain" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </RootStyle>
  );
}
