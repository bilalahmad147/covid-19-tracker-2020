import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainCont: {
    padding: "10px",
    justifyContent: "center",
  },
  paper: {
    margin: "10px",
    textAlign: "center",
    color: "black",
  },
}));

export default function Card({data}) {
  const classes = useStyles();

  const { confirmed, deaths, recovered, lastUpdate } = data;
  if (!confirmed) {
    return "data is loading...";
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.mainCont} spacing={5}>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ borderBottom: "5px solid blue" }}
            className={classes.paper}
          >
            <Typography className="new" gutterBottom>
              New Confirmed Cases
            </Typography>
            <Typography className="pos" variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Dated: {new Date(lastUpdate).toDateString()}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ borderBottom: "5px solid red" }}
            className={classes.paper}
          >
            <Typography className="death" gutterBottom>
              New Confirmed Deaths
            </Typography>
            <Typography className="pos" variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Dated: {new Date(lastUpdate).toDateString()}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ borderBottom: "5px solid green" }}
            className={classes.paper}
          >
            <Typography className="rec" gutterBottom>
              New Confirmed Recovered
            </Typography>
            <Typography className="pos" variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Dated: {new Date(lastUpdate).toDateString()}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
