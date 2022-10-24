import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { GridContainer, SearchSection, ResultContainer } from "./styled";
import { useState } from "react";
import axios from "axios";

export const WelcomeWindow = () => {
  const [show, isShown] = useState(false); //changes the state of the app, to show data or to get back to search
  const [value, setValue] = useState(""); //changes the state of the button -> disabled/enabled
  const [data, setData] = useState(""); //changes the state of data, it is passing the data into the app
  const [errors, setErrors] = useState(false); //changes the state of the errors, if it is an error it makes the input to be red

  function handleChange(e) {
    setValue(e.target.value);
  }
  const handleClick = (e) => {
    isShown(false);
    setErrors(false);
  };
  const getData = async () => {
    const { data } = await axios
      .get(`https://restcountries.com/v3.1/name/${value}`)
      .catch((e) => {
        setErrors((current) => !current);
      });

    isShown((current) => !current);
    setData(data);
  };

  return (
    <GridContainer>
      {!show && (
        <Grid>
          <Typography className="greeting_welcome" variant="h2">
            Countriezzz
          </Typography>
          <Typography className="call_to_action" variant="body1">
            What's the country you want to explore?
          </Typography>
        </Grid>
      )}
      {show && (
        <ResultContainer>
          <Grid>
            <Typography variant="h4" className="country_name">
              {data[0].name.common}
            </Typography>
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
            <Typography>Area:{data[0].area} sq. KM</Typography>
          </Grid>
          <Grid>
            <Typography>Population:{data[0].population} people</Typography>
          </Grid>
          <Grid>
            <Typography>Region:{data[0].region}</Typography>
          </Grid>
        </ResultContainer>
      )}
      <Grid>
        <SearchSection>
          {!show && (
            <TextField
              className="search_input"
              variant="outlined"
              onChange={handleChange}
              error={errors}
            />
          )}
          {!show && (
            <Button variant="contained" disabled={!value} onClick={getData}>
              Explore!
            </Button>
          )}
          {show && (
            <Button variant="contained" disabled={!value} onClick={handleClick}>
              Done
            </Button>
          )}
        </SearchSection>
      </Grid>
    </GridContainer>
  );
};
