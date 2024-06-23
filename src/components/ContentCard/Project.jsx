import { Card, Typography } from '@mui/material';
import React from 'react';
import medica from '../../assets/images/medica.png';

const Project = ({logo,title}) => {
  return (
    <Card
      sx={{
        position: 'relative',
        '&:hover': {
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          },
          '& > .typography': {
            visibility: 'visible',
            opacity: 1,
            color:'#fff'
          },
        },
      }}
    >
      <img src={logo} alt="" />
      <Typography
        className="typography"
        variant="h5"
        color="text.primary"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          visibility: 'hidden',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          zIndex: 1,
        }}
      >
        {title}
      </Typography>
    </Card>
  );
};

export default Project;
