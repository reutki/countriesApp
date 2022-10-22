import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { GridContainer, SearchSection, ResultContainer } from "./styled";
import { useState } from "react";
import axios from "axios";

export const WelcomeWindow = () => {
  const [show, isShown] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  const getData = async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${value}`
    );
    setData(data);
    isShown((current) => !current);
    console.log(data[0]);
  };

  return (
    <GridContainer>
      {!show && (
        <Grid>
          <Typography className="greeting_welcome">
            Welcome to the Countries Info App!
          </Typography>
        </Grid>
      )}
      {show && (
        <ResultContainer>
          <Grid>
            <Typography>{data[0].name.common}</Typography>
            <img
              className="flag"
              src={data[0].flags.svg}
              alt={data[0].name.common}
            ></img>
          </Grid>
          <Grid>
            <Typography>Language:{data[0].languages[0]}</Typography>
          </Grid>
          <Grid>
            <Typography>Capital:{data[0].capital[0]}</Typography>
          </Grid>
          <Grid>
            <Typography>Area:{data[0].area}square kilometers</Typography>
          </Grid>
          <Grid>
            <Typography>Population:{data[0].population}</Typography>
          </Grid>
          <Grid>
            <Typography>Region:{data[0].region}</Typography>
          </Grid>
        </ResultContainer>
      )}
      <Grid>
        <SearchSection>
          <TextField
            className="search_input"
            variant="outlined"
            onChange={handleChange}
          />
          <Button variant="contained" disabled={!value} onClick={getData}>
            Explore!
          </Button>
        </SearchSection>
      </Grid>
    </GridContainer>
  );
};
