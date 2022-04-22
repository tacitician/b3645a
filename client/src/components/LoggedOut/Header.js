import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: "0",
    right: `42px`,
    top: "30px",
    height: "54px",

    display: "flex",
    alignItems: "center",
  },
  "register-text": {
    color: `${theme.palette.secondary.main}`,
    fontSize: "14px",
    paddingRight: "30px",
  },
  "register-button": {
    boxShadow: "0px 4px 4px rgba(88, 133, 196, 0.15)",
    width: "140px",
    height: "54px",
    borderRadius: "5px",
    fontSize: "14px",
    lineHeight: "19px",
    fontWeight: "600",
  },
}));

const Header = ({ href, to, buttonText, headerText }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Typography className={classes["register-text"]}>{headerText}</Typography>
      <Link href={href} to={to} style={{ textDecoration: "none" }}>
        <Button
          color="primary"
          variant="text"
          size="large"
          underline="none"
          className={classes["register-button"]}
        >
          {buttonText}
        </Button>
      </Link>
    </Grid>
  );
};

export default Header;
