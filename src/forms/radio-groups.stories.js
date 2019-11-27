import React from "react";
import makeStyles from "dry/utils/makeStyles";
import Grid from "dry/components/grid";
import Text from "dry/components/text";
import FormLabel from "dry/components/form-label";
import Paper from "dry/components/paper";
import Radio from "dry/components/radio";
import FormControlLabel from "dry/components/form-control-label";
import FormGroup from "dry/components/form-group";
import RadioGroup from "dry/components/radio-group";
import Typography from "dry/components/typography";
import Divider from "dry/components/divider";
import Button from "dry/components/button";

export default {
  title: "Forms|RadioGroups/Default",
};

const useStyles = makeStyles(() => ({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "120vh",
    padding: "1rem",
  },

  formTitle: {
    fontWeight: 500,
    fontSize: "21px",
    lineHeight: "21px",
    color: "#334D6E",
  },

  gridItemFormGroup: {
    "&.MuiGrid-item": {
      display: "flex",
    },

    "& .MuiFormGroup-root": {
      flexGrow: 1,
      flexBasis: "30%",
    },

    "& .MuiFormGroup-root[role=radiogroup]": {
      flexDirection: "row",
    },
  },

  gridItemButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export const all = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid item xs={8}>

        <Paper>
          <Grid container spacing={4}>
            {/* Radio Groups */}
            <Grid item xs={12}>
              <Text component="h1">Radio Groups</Text>
            </Grid>

            {/* Interior Details */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" className={classes.formTitle}>
                Interior Details
                  </Typography>
                </Grid>

                <Grid item xs={12} className={classes.gridItemFormGroup}>
                  <FormGroup>
                    <FormLabel component="legend">Driver Airbag</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Air Conditioning</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">CD Audio System</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12} className={classes.gridItemFormGroup}>
                  <FormGroup>
                    <FormLabel component="legend">Passenger Airbag</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Cup holders</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">iPod/MP3 Compatible</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12} className={classes.gridItemFormGroup}>
                  <FormGroup>
                    <FormLabel component="legend">Side Airbag</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">AM/FM Stereo</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Leather Seats</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" className={classes.formTitle}>
                Exterior Details
                  </Typography>
                </Grid>

                <Grid item xs={12} className={classes.gridItemFormGroup}>
                  <FormGroup>
                    <FormLabel component="legend">Alloy Wheels</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Fog Lights</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Tinted Windows</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" className={classes.formTitle}>
                Equipments
                  </Typography>
                </Grid>

                <Grid item xs={12} className={classes.gridItemFormGroup}>
                  <FormGroup>
                    <FormLabel component="legend">Alarm System</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Keyless Entry</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Power Windows</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12} className={classes.gridItemFormGroup}>
                  <FormGroup>
                    <FormLabel component="legend">Power Steering</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Engine Immobilizer</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Electric Mirrors</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12} className={classes.gridItemFormGroup}>
                  <FormGroup>
                    <FormLabel component="legend">ABS</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Power Door Locks</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel component="legend">Multizone Climate System</FormLabel>
                    <RadioGroup
                      name="sample"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        label="Yes"
                        control={<Radio value="yes" />}
                      />
                      <FormControlLabel
                        label="No"
                        control={<Radio value="no" />}
                      />
                    </RadioGroup>
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.gridItemButton}>
              <Button
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>

          </Grid>
        </Paper>

      </Grid>
    </Grid>
  );
};
