import React from "react";
import { useNavigate, useParams } from "react-router-dom";

// GraphQl
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/queries";

// mui
import { Container } from "@mui/system";
import { Avatar, Box, CircularProgress, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

// sanitize
import sanitizeHtml from "sanitize-html";

const BlogPage = () => {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  const navigate = useNavigate();

  console.log({ loading, data, errors });

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

  if (errors) return <h3>errors</h3>;

  const { post } = data;

  return (
    <Container maxWidth="lg">
      <Grid container padding={3}>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h5"
            color="primary"
            sx={{fontSize: {xs: 20, sm: 25}}}
            fontWeight={700}
            ml={8}
          >
            {post.title}
          </Typography>

          <ArrowBackRoundedIcon
            onClick={() => navigate(-1)}
            sx={{ color: "primary", fontSize: "1.7rem", cursor: "pointer" }}
          />
        </Grid>

        <Grid item xl={12} mt={5}>
          <img
            src={post.coverPhoto.url}
            alt={post.slug}
            width="100%"
            style={{
              borderRadius: "15px",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Grid>

        <Grid item xs={12} mt={4} display="flex" alignItems="center">
          <Avatar
            src={post.author.avatar.url}
            alt={post.author.id}
            sx={{ width: {xs: 60, sm: 80}, height: {xs: 60, sm: 80}, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h6" fontWeight={700}>
              {post.author.name}
            </Typography>
            <Typography
              component="p"
              variant="p"
              color="text.secondary"
              fontWeight={600}
            >{post.author.position}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} mt={4}>
          <div
            style={{ fontWeight: "500" }}
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(post.content.html),
            }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
