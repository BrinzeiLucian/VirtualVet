import React, { Fragment, useState } from "react";
import { Button, Divider, Typography } from "@mui/material";
import classes from "./registerForm.module.css";
import FormInput from "../input/input.jsx";
import Google from "../../logo/Google.jsx";

const RegisterForm = () => {
  const [values, setValues] = useState({
    Email: "",
    Password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Email",
      label: "Email Address",
      type: "email",
      placeholder: "JohnSmith@gmail.com",
    },
    {
      id: 2,
      name: "Password",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
    {
      id: 3,
      name: "repeat_password",
      label: "Repeat Password",
      type: "password",
      placeholder: "Repeat Password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className={classes.wrapper}>
        <form onClick={handleSubmit}>
          <Typography className={classes.header}>SIGN UP</Typography>
          <Typography className={classes.details}>
            Please provide your details.
          </Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.buttonsGoogle}
              type="button"
              variant="contained"
              startIcon={<Google />}
            >
              SIGN IN WITH GOOGLE
            </Button>
          </div>
          <Divider
            className={classes.divider}
            textAlign="center"
            sx={{
              border: "1px solid #E6E6E",
            }}
          >
            <Typography
              className={classes.text}
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "50%",
                height: "100%",
                alignItems: "center",
              }}
            >
            OR
            </Typography>
          </Divider>
          {inputs.map((input) => (
            <div>
              <FormInput
                className={classes.input}
                key={input.id}
                label={input.label}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                value={values[input.name]}
                onChange={onChange}
              />
            </div>
          ))}
          <div className={classes.buttons}>
            <Button
              className={classes.buttonsLogin}
              type="button"
              variant="contained"
            >
              SIGN UP
            </Button>
          </div>
          <div className={classes.signUpText}>
            <Typography>Already have an account ? Sign In</Typography>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default RegisterForm;
