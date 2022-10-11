import React from "react";

// GraphQl
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/queries";

// mui
import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Comments = ({ slug }) => {
  const { loading, data, errors } = useQuery(GET_POST_COMMENTS, {
    variables: {
      slug,
    },
  });

  if(loading) return null

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        p: 2,
        mt: 8,
      }}
    >
      <Grid item xs={12}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          نظرات
        </Typography>

        {
          data.comments.map((comment) => (
            <Grid item xs={12} key={comment.id} my={2} p={2} border="1px solid silver" borderRadius={2} >
                <Box component="div" display="flex" alignItems="center">
                    <Avatar>{comment.name[0]}</Avatar>
                    <Typography component="span" variant="p" fontWeight={500} mr={2}>{comment.name}</Typography>
                </Box>

                <Typography component="p" variant="p" mt={3} fontWeight={500}>{comment.text}</Typography>
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  );
};

export default Comments;
