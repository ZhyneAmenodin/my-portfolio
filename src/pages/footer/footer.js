import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Box, Typography, Avatar } from "@mui/material";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(30, 0),
}));
const hoverIconSX = {
  "&:transform": {
    scale: 1.5,
  },
};

export default function footer() {
  return (
    <RootStyle>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sx={{ hoverIconSX }}>
          <div alt="Facebook" style={{ padding: 10, width: 80, height: 80 }}>
            <a href="https://web.facebook.com/zhyne.amenoden/">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/facebook/facebook-plain.svg" />
            </a>
          </div>
        </Grid>
        <Grid item>
          <div alt="LinkedIn" style={{ padding: 10, width: 80, height: 80 }}>
            <a href="https://www.linkedin.com/in/zhyne-a-amenodin-66a02a242/">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" />
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" sx={{ mt: 10 }}>
        <Typography
          variant="h4"
          sx={{ color: "white", fontFamily: "impact", letterSpacing: 5 }}
        >
          Contact Us
        </Typography>
        <Grid container direction="row" justifyContent="center" sx={{ mt: 10 }}>
          <Typography variant="h4" sx={{ color: "white", letterSpacing: 5 }}>
            zhyne.amenodin@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
