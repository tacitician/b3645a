import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  FormControl,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LoggedOutForm, LoggedOutHeader, LoggedOutLayout } from "./components";

const useStyles = makeStyles((theme) => ({
  "email-field": {
    "& .MuiInput-underline:before": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    ">": { fontWeight: "600" },
  },
  forgot: {
    fontSize: "0.75rem",
  },
  input: {
    paddingTop: "39px",
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
      <LoggedOutHeader
        classes={classes}
        href="/register"
        to="/register"
        buttonText="Create account"
        headerText="Don't have an account?"
      />
      <LoggedOutForm
        classes={classes}
        onSubmit={handleLogin}
        buttonText="Login"
        introText="Welcome back!"
      >
        <Grid>
          <FormControl
            margin="normal"
            required
            fullWidth
            className={classes.input}
          >
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
            className={classes.input}
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
        </Grid>
      </LoggedOutForm>
    </LoggedOutLayout>
  );
};

export default Login;
