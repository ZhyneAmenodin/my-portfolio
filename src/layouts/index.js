import React from "react";
import { Outlet } from "react-router-dom";

import MainHeader from "./mainHeader";
import { Stack } from "@mui/material";

export default function MainLayout() {
  return (
    <Stack>
      <MainHeader />
      <Outlet />
    </Stack>
  );
}
