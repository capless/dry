/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import cn from "clsx";
import makeStyles from "dry/utils/makeStyles";
import Grid from "dry/components/grid";
import Text from "dry/components/text";
import Paper from "dry/components/paper";
import Typography from "dry/components/typography";
import Button from "dry/components/button";
import TextField from "dry/components/textfield";
import InputAdornment from "dry/components/input-adornment";
import { DoneOutline, EditOutlined, DeleteOutlined } from "dry/icons";

export default {
  title: "Forms|EditableTextFieldGroups",
};

const useStyles = makeStyles(() => ({
  rootGrid: {
    backgroundColor: "#E5E5E5",
    height: "120vh",
    padding: "1rem",
  },

  firstTitle: {
    marginTop: "0 !important",
  },

  formTitle: {
    fontWeight: 500,
    fontSize: "21px",
    lineHeight: "21px",
    color: "#334D6E",
    marginTop: "1.5rem",
  },

  gridItemFormGroup: {
    "&.MuiGrid-item": {
      display: "flex",
    },

    "& .MuiFormGroup-root": {
      flexGrow: 1,
      flexBasis: "30%",
    },
  },

  gridItemButton: {
    display: "flex",
    justifyContent: "flex-end",
  },

  inputAdornment: {
    cursor: "pointer",
    color: "#707683",
  },
}));

export const editable = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.rootGrid}>
      <Grid item xs={8}>

        <Paper>
          <Grid container spacing={4}>
            {/* Radio Groups */}
            <Grid item xs={12}>
              <Text component="h1">TextField Groups</Text>
            </Grid>

            {/* Customer Details */}
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h6" className={cn(classes.firstTitle, classes.formTitle)}>
                    Customer Details
                  </Typography>
                </Grid>

                <Grid item xs={4} className={classes.gridItemFormGroup}>
                  <EditableTextField label="First name" defaultValue="John" />
                </Grid>

                <Grid item xs={4} className={classes.gridItemFormGroup}>
                  <EditableTextField label="Middle name" defaultValue="Park" />
                </Grid>

                <Grid item xs={4} className={classes.gridItemFormGroup}>
                  <EditableTextField label="Last name" defaultValue="Doe" />
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h6" className={classes.formTitle}>
                    Another Details
                  </Typography>
                </Grid>

                {new Array(12).fill(true).map((e, i) => (
                  <Grid key={i} item xs={4} className={classes.gridItemFormGroup}>
                    <EditableTextField label={`Field ${i + 1}`} defaultValue={`Value ${i + 1}`} />
                  </Grid>
                ))}
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

function EditableTextField(props) {
  const { label, defaultValue } = props;
  const classes = useStyles();
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef();

  return (
    <TextField
      id={label}
      inputRef={inputRef}
      disabled={!isEditMode}
      label={label}
      defaultValue={defaultValue}
      InputProps={{
        endAdornment: (
          <>
            {isEditMode ? (
              <InputAdornment position="end" className={classes.inputAdornment}>
                <DoneOutline fontSize="small" onClick={handleClickDone} />
              </InputAdornment>
            ) : (
              <InputAdornment position="end" className={classes.inputAdornment}>
                <EditOutlined fontSize="small" onClick={handleClickEdit} />
              </InputAdornment>
            )}
            <InputAdornment position="end" className={classes.inputAdornment}>
              <DeleteOutlined fontSize="small" />
            </InputAdornment>
          </>
        ),
      }}
    />
  );

  function handleClickEdit() {
    setIsEditMode(true);
    requestAnimationFrame(() => {
      inputRef.current.focus();
    });
  }

  function handleClickDone() {
    setIsEditMode(false);
  }
}
