import React from "react";
import { Link } from "react-router-dom";

// GraphQl
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";

// mui
import { Avatar, CircularProgress, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading)
    return (
      <div>
        <CircularProgress size={80} sx={{ marginTop: { xs: 2, md: 8 } }} />
      </div>
    );

  if (errors) return <h3>Errors...</h3>;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.2) 0 4px 12px",
        borderRadius: 4,
      }}
    >
      {data.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2} px={1}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar
                alt={author.slug}
                src={author.avatar.url}
                sx={{ marginRight: 1 }}
              />
              <Typography
                component="p"
                variant="p"
                color="text.secondary"
                sx={{ fontWeight: 700, fontSize: "0.93rem" }}
              >
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== data.authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;
