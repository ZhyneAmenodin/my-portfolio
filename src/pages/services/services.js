import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Stack } from "@mui/material";

// -----------ICONS-------------
import DevicesIcon from "@mui/icons-material/Devices";
import LayersIcon from "@mui/icons-material/Layers";
import WebIcon from "@mui/icons-material/Web";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
//------------------------------
const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));
export default function Services() {
  return (
    <RootStyle>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={{ justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: 25,
              letterSpacing: 2,
              color: "#E7EAEF",
              opacity: "40%",
            }}
          >
            WHAT I DO
          </Typography>
        </Grid>
        <Typography
          variant="h2"
          sx={{ fontWeight: 9, letterSpacing: 2, color: "whitesmoke" }}
        >
          My Services
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ padding: 15 }}
        >
          <Grid item sx={{ maxWidth: "30%" }}>
            <Stack>
              <LayersIcon
                sx={{ alignSelf: "center", fontSize: 60, color: "blue" }}
              />
              <Typography
                variant="h5"
                sx={{ pt: 5, color: "white", textAlign: "center" }}
              >
                DESIGN + DEVELOPMENT
              </Typography>
              <Typography
                variant="h6"
                sx={{ pt: 4, color: "white", textAlign: "center" }}
              >
                Clean, Modern Designs - optimized for performance search
                engines, and converting users to customers.
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ maxWidth: "30%" }}>
            <Stack>
              <DevicesIcon
                sx={{ alignSelf: "center", fontSize: 60, color: "blue" }}
              />
              <Typography
                variant="h5"
                sx={{ pt: 5, color: "white", textAlign: "center" }}
              >
                MOBILE-FRIENDLY
              </Typography>
              <Typography
                variant="h6"
                sx={{ pt: 4, color: "white", textAlign: "center" }}
              >
                A responsive design makes your website accessible to all users,
                regardless of their device.
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ maxWidth: "30%" }}>
            <Stack>
              <WebIcon
                sx={{ alignSelf: "center", fontSize: 60, color: "blue" }}
              />
              <Typography
                variant="h5"
                sx={{ pt: 5, color: "white", textAlign: "center" }}
              >
                WEBSITE AUDITS
              </Typography>
              <Typography
                variant="h6"
                sx={{ pt: 4, color: "white", textAlign: "center" }}
              >
                Looking to improve your page performance, SEO,or user
                Experience? Request a free site audit
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pt: 5, maxWidth: "30%" }}>
            <Stack>
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
              >
                <DesignServicesIcon
                  sx={{ alignSelf: "center", fontSize: 60, color: "blue" }}
                />
                <SlowMotionVideoIcon
                  sx={{ alignSelf: "center", fontSize: 60, color: "blue" }}
                />
              </Stack>
              <Typography
                variant="h5"
                sx={{ pt: 5, color: "white", textAlign: "center" }}
              >
                DESIGN
              </Typography>
              <Typography
                variant="h6"
                sx={{ pt: 4, color: "white", textAlign: "center" }}
              >
                Looking for Photo Editing, PPT Design and Video Editing?
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
