import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { styled } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(40, 0),
}));
export default function HomeSection() {
  const [text] = useTypewriter({
    words: ["Hello I'm Zhyne Amenodin", "I'm a Front-end Developer"],
    loop: 0,
  });
  return (
    <RootStyle>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            sx={{
              align: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
