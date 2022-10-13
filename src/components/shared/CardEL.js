import React from "react";
import { Link } from "react-router-dom";

// mui
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const CardEL = ({ author, coverPhoto, slug, title }) => {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.2) 0 4px 12px", borderRadius: 4 }}>
      {author && (
        <CardHeader
          avatar={<Avatar alt={author.slug} src={author.avatar.url} />}
          title={
            <Typography
              component="p"
              variant="p"
              color="text.secondary"
              sx={{
                fontWeight: "700",
                fontSize: "0.95rem",
              }}
            >
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia component="img" src={coverPhoto.url} alt={slug} height="200" />
      <CardContent sx={{ height: "3rem" }}>
        <Typography color="text.primary" fontWeight={600}>
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px", marginTop: "0px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="medium"
            sx={{ width: "100%", borderRadius: 4 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEL;
