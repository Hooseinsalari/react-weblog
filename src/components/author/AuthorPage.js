import React from "react";
import { useParams } from "react-router-dom";

// GraphQl
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";

// mui
import {
  Avatar,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";

// sanitize
import sanitizeHtml from "sanitize-html";
import CardEL from "../shared/CardEL";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

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

  const { author } = data;

  return (
    <Container maxWidth="lg">
      <Grid container mt={5}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          textAlign="center"
          justifyContent="center"
        >
          <Avatar
            alt={author.slug}
            src={author.avatar.url}
            sx={{ width: 250, height: 250, margin: "auto" }}
          />
          <Typography
            component="h3"
            variant="h5"
            sx={{ mt: 2, fontWeight: 700 }}
            color="text.primary"
          >
            {author.name}
          </Typography>
          <Typography
            component="p"
            variant="h5"
            mb={5}
            fontWeight={500}
            color="text.secondary"
          >
            {author.position}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <div
            style={{ fontWeight: "500" }}
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
          ></div>
        </Grid>

        <Grid item xs={12} mt={10} mb={5}>
          <Typography coponent="h3" variant="h4">
            مقالات {author.name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {author.posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
