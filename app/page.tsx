import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Header from "./Components/Header/index"
import Aside from "./Components/Aside";
import Part2 from './Components/Part2'

export default function Home() {
  return (
    <Box sx={{marginTop:"-8px"}}>
      <Header>
        <Aside/>
        <Part2/>
      </Header>
    </Box>

  );
}
