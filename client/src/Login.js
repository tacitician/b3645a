import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputAdornment,
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
  "email-field": {
    top: `4rem`,

    "& .MuiInput-underline:before": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    ">": { fontWeight: "600" },
  },
  "password-field": {
    top: `11rem`,
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

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
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
          <Box width={"100%"}>
            <Grid className={classes["signed-out-header"]}>
              <Typography className={classes["register-text"]}>
                Don't have an account?
              </Typography>
              <Link
                href="/register"
                to="/register"
                style={{ textDecoration: "none" }}
              >
                <Button
                  color="primary"
                  variant="text"
                  size="large"
                  underline="none"
                  className={classes["register-button"]}
                >
                  Create account
                </Button>
              </Link>
            </Grid>
            <Grid className={classes.form}>
              <form onSubmit={handleLogin}>
                <Typography className={classes.welcome}>
                  Welcome back!
                </Typography>
                <Grid>
                  <FormControl margin="normal" required fullWidth>
                    <TextField
                      aria-label="username"
                      label="E-mail address"
                      name="username"
                      type="text"
                      fullWidth
                      className={classes["email-field"]}
                    />
                  </FormControl>
                  <FormControl
                    margin="normal"
                    required
                    color="primary"
                    fullWidth
                    className={classes["password-field"]}
                  >
                    <TextField
                      label="Password"
                      aria-label="password"
                      type="password"
                      name="password"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Typography
                              aria-label="toggle password visibility"
                              color="primary"
                              className={classes.forgot}
                            >
                              Forgot?
                            </Typography>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                  <Grid container justifyContent="center">
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      color="primary"
                      className={classes["sign-in-button"]}
                    >
                      Login
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

export default Login;
