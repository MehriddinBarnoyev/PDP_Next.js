"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "./Components/Header";
import Aside from "./Components/Aside";

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState(<Aside />);

  const handleNavigation = (component) => {
    setCurrentComponent(component);
  };

  return (
    <Box sx={{ marginTop: "-8px" }}>
      <Header onNavigate={handleNavigation} />
      {currentComponent}
    </Box>
  );
}
