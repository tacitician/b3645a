import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "grid",
    padding: "0 97px",
    paddingTop: "86px",

    [theme.breakpoints.down("sm")]: {
      padding: "0 10px",
      paddingTop: "40px",
    },

    "& .MuiFormLabel-root": {
      fontSize: "14px",
      color: theme.palette.secondary.main,
      fontWeight: "400",
    },
  },
  welcome: {
    fontWeight: "600",
    fontSize: "26px",
    paddingBottom: "12px",
  },
  "button-container": {
    paddingTop: "40px",
  },
  "sign-in-button": {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
    width: "160px",
    height: "56px",
    borderRadius: "3px",
  },
}));

const Form = ({ onSubmit, buttonText, introText, children }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.form}>
      <form onSubmit={onSubmit}>
        <Typography className={classes.welcome}>{introText}</Typography>
        <Grid>{children}</Grid>
        <Grid
          container
          justifyContent="center"
          className={classes["button-container"]}
        >
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            className={classes["sign-in-button"]}
          >
            {buttonText}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default Form;
