import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid component="main" className={classes.root}>
      <Sidebar />
      <Box className={classes.wrapper}>{children}</Box>
    </Grid>
  );
};

export default Layout;
