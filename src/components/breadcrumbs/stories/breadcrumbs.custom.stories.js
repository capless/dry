import React from "react";
import makeStyles from "utils/makeStyles";
import Box from "components/box";
import Grid from "components/grid";
import Link from "components/link";
import Breadcrumbs from "components/breadcrumbs";

export default {
  title: "Library|Breadcrumbs/Custom",
};

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#E5E5E5",
    padding: "1rem",
    height: "90vh",
  },

  custom: {
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "23px",
    letterSpacing: "0.01em",
    color: "#334D6E",
  },
}));

export const customSeparator = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›" className={classes.custom}>
            <Link color="inherit" href="/cars">
              Cars
            </Link>
            <Link color="inherit" href="/cars/inventory">
              Inventory
            </Link>
            <Link color="inherit" href="/cars/inventory/volkswagen-jetta">
              2011 Volkswagen Jetta
            </Link>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </Box>
  );
};
