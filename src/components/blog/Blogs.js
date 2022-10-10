import React from "react";

// mui
import { CircularProgress, Grid } from "@mui/material";

// GraphQl
import { useQuery } from "@apollo/client";
import { GET_POSTS_INFO } from "../../graphql/queries";

// components
import CardEL from "../shared/CardEL";

const Blogs = () => {
  const { loading, data, errors } = useQuery(GET_POSTS_INFO);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "1000px",
        }}
      >
        <CircularProgress size={120} sx={{ marginTop: 8 }} />
      </div>
    );

  if (errors) return <h1>errors...</h1>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
