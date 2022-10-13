import React from "react";
import { Link } from "react-router-dom";

// mui
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

// mui icons
import BookIcon from "@mui/icons-material/Book";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h5"
            component="h1"
            flexGrow={1}
            fontWeight="bold"
          >
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              ایران وبلاگ
            </Link>
          </Typography>
          <Link to="/">
            <BookIcon
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
