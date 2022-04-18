import { Box, Grid } from "@material-ui/core";
import backgroundImage from "../assets/bg-img.png";
import bubble from "../assets/bubble.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "425fr 599fr",
      height: "100vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "100%",
    },
  },
  sider: {
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      position: "relative",
      height: "100vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "100%",
    },
    objectFit: "contain",
    filter: "saturate(2.2)",
    isolation: "isolate",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
      mixBlendMode: "normal",
      opacity: "0.85",
      zIndex: "2",
    },
  },
  "side-image": {
    width: "100%",
    height: "100%",
    zIndex: "1",
  },
  "side-text": {
    position: "absolute",
    height: "80px",
    left: "0%",
    right: "0%",
    top: "calc(40%)",
    lineHeight: "40px",
    fontWeight: "400",
    textAlign: "center",
    zIndex: "3",
    color: "#fff",
    fontSize: "1.625rem",
  },
  "image-filter": {
    position: "relative",
    height: "100%",
  },
}));

const LoggedOutLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid component="main" className={classes.root}>
      <Grid className={classes["sider"]}>
        <Box className={classes["image-filter"]}>
          <img
            src={backgroundImage}
            className={classes["side-image"]}
            alt="background"
          />
        </Box>
        <Box className={classes["side-text"]}>
          <img src={bubble} alt="bubble" />
          <Box pt={4}>
            <Box>Converse with anyone</Box>
            <Box>with any language</Box>
          </Box>
        </Box>
      </Grid>
      <Grid>{children}</Grid>
    </Grid>
  );
};

export { useStyles };
export default LoggedOutLayout;
