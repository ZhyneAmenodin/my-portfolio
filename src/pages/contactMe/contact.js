import React from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
// import "./contact.scss";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(20, 5),
}));
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      opacity: "40%",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "White",
    },
  },
});
export default function Contact() {
  return (
    <RootStyle>
      <Grid container>
        <Typography variant="h4" sx={{ color: "white" }}>
          {" "}
          Contact Information
        </Typography>
        <Stack container direction="column" sx={{ mt: 5, paddingX: 5 }}>
          <Stack
            container
            direction="row"
            justifyContent="space-evenly"
            spacing={15}
            sx={{ mt: 5 }}
          >
            <Stack direction="row">
              <Typography variant="h6" sx={{ color: "white" }}>
                Address:
              </Typography>
              <Typography
                variant="h6"
                sx={{ ml: 1, color: "white", opacity: "40%" }}
              >
                Antipolo City, Dela PAZ J.Sumolong street
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography variant="h6" sx={{ color: "white" }}>
                Phone:
              </Typography>
              <Typography variant="h6" sx={{ ml: 1, color: "blue" }}>
                +639384221742
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography variant="h6" sx={{ color: "white" }}>
                Email:
              </Typography>
              <Typography
                variant="h6"
                sx={{ ml: 1, color: "white", opacity: "40%" }}
              >
                zhyne.amenodin@gmail.com
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack container direction="column" sx={{ padding: 10 }} spacing={5}>
          <TextField
            label="Name"
            variant="outlined"
            sx={{
              "& .MuiFormLabel-root": {
                color: "white",
                opacity: "40%",
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },

              width: "500px",
            }}
            inputProps={{ style: { color: "white" } }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            sx={{
              "& .MuiFormLabel-root": {
                color: "white",
                opacity: "40%",
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },

              width: "500px",
            }}
            inputProps={{ style: { color: "white" } }}
          />
          <TextField
            label="Subject"
            variant="outlined"
            sx={{
              "& .MuiFormLabel-root": {
                color: "white",
                opacity: "40%",
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },

              width: "500px",
            }}
            inputProps={{ style: { color: "white" } }}
          />
          <TextField
            fullWidth
            label="Enter your message here."
            variant="outlined"
            multiline
            rows={10}
            sx={{
              "& .MuiFormLabel-root": {
                color: "white",
                opacity: "40%",
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
            inputProps={{ style: { color: "white" } }}
          />

          {/* <Grid class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">
              Name
            </label>
          </Grid> */}
        </Stack>
      </Grid>
    </RootStyle>
  );
}
