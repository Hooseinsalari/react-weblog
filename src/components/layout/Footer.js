import React from "react";

// mui
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        fontWeight={800}
        color="primary"
        padding={1}
        mt={3}
        textAlign="center"
      >
        حسین سالاری - پروژه‌ی وبلاگ با GraphQl
      </Typography>
    </footer>
  );
};

export default Footer;
