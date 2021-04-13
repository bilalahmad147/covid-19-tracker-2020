import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    "& > *": {
      margin: "0 auto",
      marginTop: "50px",
      width: "400px",
      height: "300px",
    },
    heading: {
      width: "10px",
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.login} elevation={5}>
        <form noValidate autoComplete="off">
          <h1>Login Page</h1>
          <TextField
            className={classes.heading}
            id="standard-basic"
            label="Enter Email"
          />
          <br />
          <br/>
          <TextField id="standard-basic" label="Enter Password" />
          <br />
          <br/>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}
