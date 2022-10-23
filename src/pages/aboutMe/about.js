import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Box, Typography, Avatar } from "@mui/material";
import Link from "@mui/material/Link";
//-------------------
import img1 from "../../assets/picture1.png";
//-----------------------
const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));
const hoverIconSX = {
  "&:transform": {
    scale: 1.5,
  },
};
export default function about() {
  return (
    <RootStyle>
      <Container>
        <Grid container direction="row" sx={{ display: "flex" }}>
          <Grid item md={6}>
            <Box>
              <img
                alt="Me"
                src={img1}
                style={{ display: "flex", height: 650 }}
              />
            </Box>
          </Grid>
          <Grid item md={6} direction="column">
            <Grid container md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "200px",
                  ml: 2,
                  mt: 5,
                  fontFamily: "impact",
                  color: "whitesmoke",
                  opacity: "10%",
                  letterSpacing: "25px",
                  zIndex: 1,
                }}
              >
                {" "}
                ABOUT
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "sans-serif",
                  color: "white",
                  letterSpacing: "5px",
                  position: "absolute",
                  zIndex: 2,
                  pt: 18,
                  pl: 9,
                }}
              >
                {" "}
                Hi! I'm Zhyne A. Amenodin
              </Typography>
            </Grid>
            <Grid sx={{ pl: 2, textAlign: "justify" }}>
              <Typography variant="h5" sx={{ color: "whitesmoke" }}>
                {" "}
                A developer that specializes in creating beautiful yet
                minimalist, efficient websites. I enjoy creating extremely
                visual experiences using up to date technologies..
              </Typography>
            </Grid>
            <Grid sx={{ mt: 3 }}>
              <Link
                variant="h6"
                sx={{ color: "blue", ml: 2, letterSpacing: 3 }}
                href="CV.pdf"
                download="CV.pdf"
                underline="none"
              >
                {"Checkout my CV"}
              </Link>
            </Grid>
            <Grid container spacing={2} direction="row" sx={{ mt: 1, ml: 1 }}>
              <Grid item sx={{ hoverIconSX }}>
                <div alt="Facebook" style={{ width: 40, height: 40 }}>
                  <a href="https://web.facebook.com/zhyne.amenoden/">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/facebook/facebook-plain.svg" />
                  </a>
                </div>
              </Grid>
              <Grid item>
                <div alt="LinkedIn" style={{ width: 40, height: 40 }}>
                  <a href="https://www.linkedin.com/in/zhyne-a-amenodin-66a02a242/">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" />
                  </a>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              spacing={1}
              sx={{ mt: 2, ml: 1 }}
            >
              <Grid item>
                <Typography variant="h5" sx={{ color: "whitesmoke" }}>
                  Contact me here!
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ mr: 1, color: "whitesmoke" }}>
                  Email:{" "}
                  <span style={{ color: "blue" }}>
                    amenodin.za28@s.msumain.edu.ph
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ color: "whitesmoke" }}>
                  Phone: <span style={{ color: "blue" }}>+639384221742</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
