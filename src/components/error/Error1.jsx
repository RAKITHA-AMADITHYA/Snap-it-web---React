import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImg from '../../assets/img/error.jpg';
import { Button, Grid, Typography } from '@mui/material';

const Error1 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Grid container display="flex" justifyContent="center" alignItems="center" flexDirection="column" textAlign="center" height="100vh">
      <Grid item display="flex" justifyContent="center" alignItems="center">
        <img src={errorImg} width="40%" alt="Error" />
      </Grid>
      <Grid item display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Button variant="contained" onClick={handleGoBack}>Go Back</Button>
      </Grid>
    </Grid>
  );
};

export default Error1;
