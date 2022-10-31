import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Box, Typography, Stack } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import { useState } from "react";
//-------------------
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img1 from "../../assets/picture1.png";
//-----------------------
const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

export default function About(openFull) {
  const location = useLocation();
  const [java] = useState(75);
  const [mysql] = useState(90);
  const [cplus] = useState(40);
  const [css] = useState(60);
  const [js] = useState(70);
  const [ts] = useState(60);

  const [react] = useState(85);
  const [quasar] = useState(80);
  const [netbeans] = useState(80);
  const [xampp] = useState(95);

  const [psshop] = useState(40);
  const [filmora] = useState(95);

  const data = location.state?.data;
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
              {data === true ? null : (
                <Link
                  variant="h6"
                  href="CV.pdf"
                  sx={{ p: 1, color: "blue", letterSpacing: 3 }}
                  underline="none"
                >
                  {"> show more details"}
                </Link>
              )}
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
              <Grid item>
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
          {data === true ? (
            <>
              <Grid
                container
                md={12}
                direction="row"
                sx={{ paddingX: 10, paddingTop: 15, marginLeft: 10 }}
              >
                <Grid item>
                  <Typography variant="h4" sx={{ color: "white", pb: 5 }}>
                    Profile
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h5" sx={{ color: "white" }}>
                    {
                      "I'm a UI/UX Designer & Frontend Developer. I aim to make a difference through my creative solution. "
                    }
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      opacity: "45%",
                      mt: 8,
                      textAlign: "justify",
                    }}
                  >
                    {
                      "I am a front-end web developer who loves working with React. I have been developing some systems since College and have worked with many different technologies over the years. I love learning new things and always try to keep my skills sharp."
                    }
                    {
                      " My favorite programming language is JavaScript. I started out using C++ and then moved onto Java before finally settling on JS. I enjoy writing clean code and making sure everything works smoothly."
                    }
                  </Typography>
                  <Grid sx={{ mt: 5 }}>
                    <Stack direction="row">
                      <Typography
                        variant="h6"
                        sx={{ color: "white", letterSpacing: 3 }}
                      >
                        Name:
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          ml: 2,
                          color: "white",
                          letterSpacing: 3,
                          opacity: "45%",
                        }}
                      >
                        Zhyne A. Amenodin
                      </Typography>
                    </Stack>
                    <Stack direction="row" sx={{ mt: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "white", letterSpacing: 3 }}
                      >
                        Current Address:
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          ml: 2,
                          color: "white",
                          letterSpacing: 3,
                          opacity: "45%",
                        }}
                      >
                        Antipolo City, Dela PAZ J.Sumolong street
                      </Typography>
                    </Stack>
                    <Stack direction="row" sx={{ mt: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "white", letterSpacing: 3 }}
                      >
                        Permanent Address:
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          ml: 2,
                          color: "white",
                          letterSpacing: 3,
                          opacity: "45%",
                        }}
                      >
                        MSU, Marawi City Bry. Lomidong
                      </Typography>
                    </Stack>
                    <Stack direction="row" sx={{ mt: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "white", letterSpacing: 3 }}
                      >
                        Phone:
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          ml: 2,
                          color: "white",
                          letterSpacing: 3,
                          opacity: "45%",
                        }}
                      >
                        +639384221742
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container>
                <Grid container sx={{ mt: 20, paddingX: 1 }}>
                  <Typography variant="h4" sx={{ color: "white" }}>
                    Education
                  </Typography>

                  <Stack direction="row" sx={{ mt: 10 }}>
                    <Typography variant="h5" sx={{ color: "white" }}>
                      Bachelor of Information and Technology Major in Database
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        opacity: "45%",
                        ml: 1,
                      }}
                    >
                      - Mindanao State University
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        opacity: "45%",
                        ml: 10,
                      }}
                    >
                      2018 - 2023
                    </Typography>
                  </Stack>
                  <Stack direction="row" sx={{ mt: 10 }}>
                    <Typography variant="h5" sx={{ color: "white" }}>
                      TVL - Information and Communication Technology
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        opacity: "45%",
                        ml: 1,
                      }}
                    >
                      - Mindanao State University Senior High
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",

                        opacity: "45%",
                        ml: 5,
                      }}
                    >
                      2015 - 2018
                    </Typography>
                  </Stack>
                  <Stack direction="row" sx={{ mt: 10 }}>
                    <Typography variant="h5" sx={{ color: "white" }}>
                      Kinder, Elementary, Junior High
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        opacity: "45%",
                        ml: 1,
                      }}
                    >
                      - Ibn Seina Integrated School Foundation
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        opacity: "45%",
                        ml: 28,
                      }}
                    >
                      2003 - 2015
                    </Typography>
                  </Stack>
                </Grid>
                <Grid container direction="column" sx={{ mt: 15, paddingX: 5 }}>
                  <Typography variant="h4" sx={{ color: "white" }}>
                    Skills
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "white", mt: 3, pl: 5 }}
                  >
                    Programming languages
                  </Typography>
                  <Grid container direction="row">
                    <Grid md={6}>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          C++
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress
                              variant="determinate"
                              value={cplus}
                            />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(cplus)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          Java
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress
                              variant="determinate"
                              value={java}
                            />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(java)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          Javascript
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress variant="determinate" value={js} />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(js)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid md={6}>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          Typescript
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress variant="determinate" value={ts} />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(ts)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          CSS
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress variant="determinate" value={css} />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(css)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          MySQL
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress
                              variant="determinate"
                              value={mysql}
                            />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(mysql)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" sx={{ mt: 10 }}>
                    <Grid md={12} sx={{ ml: 5 }}>
                      <Typography variant="h4" sx={{ color: "white" }}>
                        Technologies / Compilers
                      </Typography>
                    </Grid>
                    <Grid md={6}>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          React.js
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress
                              variant="determinate"
                              value={react}
                            />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(react)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          Quasar
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress
                              variant="determinate"
                              value={quasar}
                            />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(quasar)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid md={6}>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          Netbeans
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress
                              variant="determinate"
                              value={netbeans}
                            />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(netbeans)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          Xampp
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress
                              variant="determinate"
                              value={xampp}
                            />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(xampp)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" sx={{ mt: 10 }}>
                    <Grid md={12} sx={{ ml: 5 }}>
                      <Typography variant="h4" sx={{ color: "white" }}>
                        MultiMedia
                      </Typography>
                    </Grid>
                    <Grid md={6}>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          Adobe Photoshop
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress
                              variant="determinate"
                              value={psshop}
                            />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(psshop)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid md={6}>
                      <Stack sx={{ paddingX: 5, mt: 5 }}>
                        <Typography variant="h4" sx={{ color: "white" }}>
                          {" "}
                          Filmora
                        </Typography>

                        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                          <Box width="500px" mr={3}>
                            <LinearProgress
                              variant="determinate"
                              value={filmora}
                            />
                          </Box>
                          <Box minWidth={35}>
                            <Typography
                              variant="body2"
                              color="White"
                            >{`${Math.round(filmora)}%`}</Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : null}
        </Grid>
      </Container>
    </RootStyle>
  );
}
