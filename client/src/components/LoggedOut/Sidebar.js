import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../assets/bg-img.png";
import bubble from "../../assets/bubble.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    objectFit: "cover",
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
  image: {
    width: "auto",
    height: "100%",
    zIndex: "1",
  },
  "text-wrapper": {
    position: "absolute",
    height: "80px",
    left: "0%",
    right: "0%",
    top: `calc(${(100 * 199) / 700}%)`,
    lineHeight: "40px",
    fontWeight: "400",
    textAlign: "center",
    zIndex: "3",
    color: "#fff",
  },
  text: {
    fontSize: "26px",
    fontWeight: "400",
  },
  "image-container": {
    position: "relative",
    height: "100%",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Box className={classes["image-container"]}>
        <img
          src={backgroundImage}
          className={classes["image"]}
          alt="background"
        />
      </Box>
      <Box className={classes["text-wrapper"]}>
        <img src={bubble} alt="bubble" />
        <Box pt={"39px"}>
          <Typography className={classes.text}>Converse with anyone</Typography>
          <Typography className={classes.text}>with any language</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Sidebar;
