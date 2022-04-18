import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LoggedOutLayout } from "./components";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100%",
  },
  container: {
    display: "flex",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    width: "50%",
  },
  "signed-out-header": {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      bottom: "0",
      left: `${(100 * 631) / 1024}%`,
      top: "30px",
      width: `${(351 / 1024) * 100}%`,
      height: "54px",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "16px",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "register-text": {
    color: `${theme.palette.secondary.main}`,
  },
  welcome: {
    fontWeight: "600",
    fontSize: "1.625rem",
  },
  form: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      width: `${(380 / 1024) * 100}%`,
      top: `${(100 * 177) / 700}%`,
      left: `${(100 * 522) / 1024}%`,
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "16px",
      width: "100%",
    },
  },
  "register-button": {
    boxShadow: "0px 4px 4px rgba(88, 133, 196, 0.15)",
    width: "10rem",
    height: "3.5rem",
    borderRadius: ".25rem",
  },
  "username-field": {
    top: `2rem`,
    ">": { fontWeight: "600" },
    "& .MuiInput-underline:before": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  "email-field": {
    top: `4rem`,
    ">": { fontWeight: "600" },
  },
  "password-field": {
    top: `6rem`,
  },
  "confirm-password-field": {
    top: `8rem`,
  },
  forgot: {
    fontSize: "0.75rem",
  },
  "sign-in-button": {
    top: `19rem`,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
    width: "10rem",
    height: "3.5rem",
    borderRadius: ".25rem",
    [theme.breakpoints.down("md")]: {
      top: `18rem`,
    },
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
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.wrapper}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.container}
        >
          <Box width="100%">
            <Grid className={classes["signed-out-header"]}>
              <Typography className={classes["register-text"]}>
                Already have an account?
              </Typography>
              <Link
                href="/login"
                to="/login"
                style={{ textDecoration: "none" }}
              >
                <Button
                  color="primary"
                  variant="text"
                  size="large"
                  underline="none"
                  className={classes["register-button"]}
                >
                  Login
                </Button>
              </Link>
            </Grid>
            <Grid className={classes.form}>
              <form onSubmit={handleRegister}>
                <Typography className={classes.welcome}>
                  Create an account.
                </Typography>
                <Grid>
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
                  </Grid>
                  <Grid>
                    <FormControl fullWidth className={classes["email-field"]}>
                      <TextField
                        label="E-mail address"
                        aria-label="e-mail address"
                        type="email"
                        name="email"
                        required
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl
                      error={!!formErrorMessage.confirmPassword}
                      fullWidth
                      className={classes["password-field"]}
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
                      <FormHelperText>
                        {formErrorMessage.confirmPassword}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl
                      error={!!formErrorMessage.confirmPassword}
                      fullWidth
                    >
                      <TextField
                        label="Confirm Password"
                        aria-label="confirm password"
                        type="password"
                        inputProps={{ minLength: 6 }}
                        name="confirmPassword"
                        required
                        fullWidth
                        className={classes["confirm-password-field"]}
                      />
                      <FormHelperText>
                        {formErrorMessage.confirmPassword}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      color="primary"
                      className={classes["sign-in-button"]}
                    >
                      Create
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </LoggedOutLayout>
  );
};

export default Signup;
