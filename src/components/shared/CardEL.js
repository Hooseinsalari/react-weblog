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

const CardEL = (props) => {
  // console.log(props);
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.2) 0 4px 12px", borderRadius: 4 }}>
      <CardHeader
        avatar={
          <Avatar alt={props.author.slug} src={props.author.avatar.url} />
        }
        title={
          <Typography
            component="p"
            variant="p"
            color="text.secondary"
            sx={{ fontWeight: "700", marginRight: "10px", fontSize: "0.95rem" }}
          >
            {props.author.name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        src={props.coverPhoto.url}
        alt={props.slug}
        height="200"
      />
      <CardContent sx={{ height: "3rem" }}>
        <Typography color="text.primary" fontWeight={600}>
          {props.title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px", marginTop: "0px" }} />
      <CardActions>
        <Link
          to={`/blogs/${props.slug}`}
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
