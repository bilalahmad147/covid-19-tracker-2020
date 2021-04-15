import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { getCountry } from "../ApiData/ApiData";

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

export default function Card() {
  const classes = useStyles();

  const fetchData = async () => {
    const response = await getCountry();
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <CountUp
                start={0}
                end={100000}
                duration={2.75}
                separator=","
              />
            </Typography>
            {/* <Typography variant="body2" component="p">
              Dated: {new Date(lastUpdate).toDateString()}
            </Typography> */}
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
              <CountUp
                start={0}
                end={200000}
                duration={2.75}
                separator=","
              />
            </Typography>
            {/* <Typography variant="body2" component="p">
              Dated: {new Date(lastUpdate).toDateString()}
            </Typography> */}
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
              <CountUp
                start={0}
                end={3000000}
                duration={2.75}
                separator=","
              />
            </Typography>
            {/* <Typography variant="body2" component="p">
              Dated: {new Date(lastUpdate).toDateString()}
            </Typography> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
