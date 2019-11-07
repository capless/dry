import React, { useState } from "react";
import makeStyles from "utils/makeStyles";
import Grid from "components/grid";
import Tabs from "components/tabs";
import Tab from "components/tab";
import Text from "components/text";
import Typography from "components/typography";

export default {
  title: "Library|Tabs/Default",
};

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
  },

  grid: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: "1rem",
  },

  panels: {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#707683",
    padding: "0 1rem",
  },

  panelLabel: {
    fontSize: "11px",
    color: "#90A0B7",
  },

  panelTitle: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#334D6E",
    margin: ".5rem 0",
  },
}));

export const withDefault = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.grid}>
      <Grid item xs={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <Tab disableRipple label="Overview" />
          <Tab disableRipple label="Expenses" />
          <Tab disableRipple label="Inquiries" />
          <Tab disableRipple label="Paperwork" />
        </Tabs>
        <div className={classes.panels}>
          <TabPanel value={value} index={0}>
            <Text component="p" className={classes.panelLabel}>
              Tagline Overview
            </Text>
            <Text component="h3" className={classes.panelTitle}>
              Rock Solid Transportation with good fuel efficiency
            </Text>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Text component="p" className={classes.panelLabel}>
              Tagline Expenses
            </Text>
            <Text component="h3" className={classes.panelTitle}>
              Rock Solid Transportation with good fuel efficiency
            </Text>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Text component="p" className={classes.panelLabel}>
              Tagline Inquiries
            </Text>
            <Text component="h3" className={classes.panelTitle}>
              Rock Solid Transportation with good fuel efficiency
            </Text>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Text component="p" className={classes.panelLabel}>
              Tagline Paperwork
            </Text>
            <Text component="h3" className={classes.panelTitle}>
              Rock Solid Transportation with good fuel efficiency
            </Text>
          </TabPanel>
        </div>
      </Grid>
    </Grid>
  );

  function TabPanel(props) {
    const {
      // eslint-disable-next-line react/prop-types
      children, value: tabValue, index, ...other
    } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={tabValue !== index}
        {...other}
      >
        <Grid p={3}>{children}</Grid>
      </Typography>
    );
  }

  function handleChange(evt, newValue) {
    setValue(newValue);
  }
};
