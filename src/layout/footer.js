import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import Link from "@mui/material/Link";
import "./footer.css";

export default function Footer() {
  return <footer className="footer">
    <Box bgcolor="text.secondary" color="white">
      <Box px={10} py={5}>
        <img src={require("../image/logo.png")} alt="logo" className="logo" />
      </Box>
      <Typography variant="caption">
                © Copyright 2022
      </Typography>
      <Divider className="divider" />
      <Grid container justify={"center"} spacing={2} pb={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Link path="#" color="inherit" align={"center"} gutterBottom>
                        About
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link path="#" color="inherit" align={"center"} gutterBottom>
                        Blog
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link path="#" color="inherit" align={"center"} gutterBottom>
                        Terms & Conditions
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link path="#" color="inherit" align={"center"} gutterBottom>
                        Contact us
          </Link>
        </Grid>
      </Grid>
    </Box>
  </footer>;
}
