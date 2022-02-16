import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import Link from "@mui/material/Link";

export default function Footer() {
    return <footer style={{margin: "auto", textAlign: "center", position: "fixed", bottom: 0, left: 0, right: 0}}>
        <Box bgcolor="text.secondary" color="white">
            <Box px={10} py={5}>
                <img src="https://images.kinorium.com/web/svg/theme-dark/logo_ua_white.svg?v=7" alt="logo"/>
            </Box>
            <Typography variant="caption">
                © Copyright 2022
            </Typography>
            <Divider style={{margin: "24px auto", width: 60}}/>
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
    </footer>
}
