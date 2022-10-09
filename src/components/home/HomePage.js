import React from "react";

// mui
import { Container, Grid, Typography } from "@mui/material";

// components
import Blogs from "../blog/Blogs";
import Authors from "../author/Authors";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container padding={3} spacing={2}>
        <Grid item xs={12} md={2}>
          <Typography variant="h5" fontWeight="700" mb={3}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>

        <Grid item xs={12} md={10}>
          <Typography variant="h5" fontWeight="700" mb={3}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
