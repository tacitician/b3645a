import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LoggedOutForm, LoggedOutHeader, LoggedOutLayout } from "./components";

const useStyles = makeStyles((theme) => ({
  "username-field": {
    "& >": { fontWeight: "600" },
    "& .MuiInput-underline:before": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  "email-field": {
    "& >": { fontWeight: "600" },
  },
  input: {
    paddingTop: "39px",
  },
  forgot: {
    fontSize: "12px",
  },
}));

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <LoggedOutLayout>
      <LoggedOutHeader
        classes={classes}
        href="/login"
        to="/login"
        buttonText="Login"
        headerText="Already have an account?"
      />
      <LoggedOutForm
        classes={classes}
        onSubmit={handleRegister}
        buttonText="Create"
        introText="Create an account."
      >
        <Grid>
          <FormControl fullWidth>
            <TextField
              aria-label="username"
              label="Username"
              name="username"
              type="text"
              required
              fullWidth
              className={classes["username-field"]}
            />
          </FormControl>
          <FormControl
            fullWidth
            className={`${classes["email-field"]} ${classes.input}`}
          >
            <TextField
              label="E-mail address"
              aria-label="e-mail address"
              type="email"
              name="email"
              required
              fullWidth
            />
          </FormControl>
          <FormControl
            error={!!formErrorMessage.confirmPassword}
            fullWidth
            className={`${classes["password-field"]} ${classes.input}`}
          >
            <TextField
              aria-label="password"
              label="Password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="password"
              required
              fullWidth
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>
          <FormControl
            error={!!formErrorMessage.confirmPassword}
            fullWidth
            className={classes.input}
          >
            <TextField
              label="Confirm Password"
              aria-label="confirm password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="confirmPassword"
              required
              fullWidth
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>
        </Grid>
      </LoggedOutForm>
    </LoggedOutLayout>
  );
};

export default Signup;
