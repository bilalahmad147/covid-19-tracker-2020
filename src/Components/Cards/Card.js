import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
  let [country, setCountry] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://api.covid19api.com/countries");
    let data = await response.json();
    console.log(data);
    setCountry(data)
  };

  console.log(country);

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
            <h3>New Confirmed Cases</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ borderBottom: "5px solid red" }}
            className={classes.paper}
          >
            <h3>New Confirmed Deaths</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ borderBottom: "5px solid green" }}
            className={classes.paper}
          >
            <h3>New Recovered Cases</h3>
          </Paper>
        </Grid>
      </Grid>
      {
          country.map((val,ind)=>{
            return (
                <h1>{val.Country}</h1>
            )
          })
      }
    </div>
  );
}
