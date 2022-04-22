import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
  },
  wrapper: {
    display: "flex",
    height: "100%",
  },
  container: {
    display: "flex",
    height: "100%",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid component="main" className={classes.root}>
      <Sidebar />
      <Box>
        <Grid>
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
              <Box width="100%">{children} </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Layout;
