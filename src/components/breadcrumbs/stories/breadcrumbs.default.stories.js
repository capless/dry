import React from "react";
import makeStyles from "dry/utils/makeStyles";
import Box from "dry/components/box";
import Grid from "dry/components/grid";
import Link from "dry/components/link";
import Breadcrumbs from "dry/components/breadcrumbs";

export default {
  title: "Library|Breadcrumbs/Default",
};

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#E5E5E5",
    padding: "1rem",
    height: "90vh",
  },
}));

export const withDefault = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Breadcrumbs>
            <Link color="inherit" href="/">
              Design System
            </Link>
            <Link color="inherit" href="/?path=/story/library-tables-default--with-default">
              Tables
            </Link>
            <Link color="inherit" href="/?path=/story/library-tables-pagination--with-avatar">
              Paginated Table
            </Link>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </Box>
  );
};
