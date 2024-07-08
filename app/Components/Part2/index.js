"use client";
import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LineChart from "./Chart001";
import rasm1 from "../Images/mine.jpg";
import rasm2 from "../Images/free-images.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Part2() {
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <LineChart />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography>Notifications</Typography>
                  <Button>
                    <Typography color={"#6956E5"}>View all</Typography>
                  </Button>
                </Box>
                <div className="row py-2">
                  <div className="col">
                    <Image src={rasm1} alt="rasm bor" layout="responsive" />
                  </div>
                  <div className="col">
                    <Typography
                      sx={{ fontWeight: "400", fontSize: "16px" }}
                      color={"#00000e"}
                    >
                      Ellie joined developers club
                    </Typography>
                    <span>04 April, 2021| 04:00 pm </span>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col">
                    <Image src={rasm2} alt="rasm bor" layout="responsive" />
                  </div>
                  <div className="col">
                    <Typography
                      sx={{ fontWeight: "400", fontSize: "16px" }}
                      color={"#00000e"}
                    >
                      Ellie joined developers club
                    </Typography>
                    <span>04 April, 2021| 04:00 pm </span>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col">
                    <Image src={rasm1} alt="rasm bor" layout="responsive" />
                  </div>
                  <div className="col">
                    <Typography
                      sx={{ fontWeight: "400", fontSize: "16px" }}
                      color={"#00000e"}
                    >
                      Ellie joined developers club
                    </Typography>
                    <span>04 April, 2021| 04:00 pm </span>
                  </div>
                </div>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
