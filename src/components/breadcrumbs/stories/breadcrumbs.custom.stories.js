import React from "react";
import makeStyles from "dry/utils/makeStyles";
import Box from "dry/components/box";
import Grid from "dry/components/grid";
import Link from "dry/components/link";
import Breadcrumbs from "dry/components/breadcrumbs";

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
