import React, { useState } from "react";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// GraphQl
import { useMutation } from "@apollo/client";
import { SEND__COMMENT } from "../../graphql/mutations";

// mui
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CommentForm = ({ slug }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [sendComment, { loading }] = useMutation(SEND__COMMENT, {
    variables: {
      name: values.name,
      email: values.email,
      text: values.text,
      slug,
    },
  });

  const inputHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const sendHandler = () => {
    if (values.name && /\S+@\S+\.\S+/.test(values.email) && values.text) {
      sendComment();

      toast.success("نظر شما با موفقیت ثبت شد و پس از بازبینی منتشر خواهد شد", {
        position: "top-center",
      });

      setValues({
        name: "",
        email: "",
        text: "",
      });
    } else {
      toast.warn("اطلاعات را به درستی وارد کنید", {
        position: "top-center",
      });
    }
  };

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        p: 2,
        mt: 5,
      }}
    >
      <Grid item xs={12}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          افزودن نظر
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={values.name}
          label="نام‌ کاربری"
          name="name"
          variant="outlined"
          sx={{ width: "100%", my: 2 }}
          onChange={inputHandler}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          value={values.email}
          label="ایمیل"
          name="email"
          variant="outlined"
          sx={{ width: "100%", my: 2 }}
          onChange={inputHandler}
        />
      </Grid>

      <Grid item xs={12} dir="rtl">
        <TextField
          value={values.text}
          label="نظر"
          name="text"
          variant="outlined"
          sx={{ width: "100%", my: 2 }}
          multiline
          minRows={4}
          onChange={inputHandler}
          />
      </Grid>

      <Grid item xs={12}>
        {loading ? (
            <Button variant="contained" disabled sx={{ mt: 1, fontSize: 15 }}>
            در حال ارسال
          </Button>
        ) : (
            <Button
            onClick={sendHandler}
            variant="contained"
            sx={{ mt: 1, fontSize: 15 }}
          >
            ارسال
          </Button>
        )}
      </Grid>

      <ToastContainer rtl />
    </Grid>
  );
};

export default CommentForm;
