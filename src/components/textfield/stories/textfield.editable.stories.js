import React, { useState, useRef } from "react";
import makeStyles from "dry/utils/makeStyles";
import { DoneOutline, EditOutlined, DeleteOutlined } from "dry/icons";
import TextField from "dry/components/textfield";
import Grid from "dry/components/grid";
import InputAdornment from "dry/components/input-adornment";

export default {
  title: "Library|Inputs/Editable",
};

const useStyles = makeStyles(() => ({
  grid: {
    margin: 0,
  },

  inputAdornment: {
    cursor: "pointer",
    color: "#707683",
  },
}));

export const all = () => {
  const classes = useStyles();
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef();

  return (
    <Grid container spacing={6} className={classes.grid}>
      <Grid item xs={12}>
        <TextField
          id="id"
          inputRef={inputRef}
          disabled={!isEditMode}
          label="First name"
          defaultValue="Jane"
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
      </Grid>
    </Grid>
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
};
