import React from 'react';
import { Box, Link } from '@mui/material';

const StylizedBox = ({ text, href }) => {
  return (
    <Box
      sx={{
        width: 150,
        height: 50,
        backgroundColor: 'white',
        color: 'black',
        padding: 2,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        typography: 'h6',
        border: '1px solid black',
        boxShadow: '7px 7px rgba(36, 51, 166, 0.8)',
        fontFamily: 'Raleway, sans-serif',  // Ensure Raleway font is applied
      }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener"
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          fontFamily: 'Raleway, sans-serif',  // Ensure Raleway font is applied
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {text}
      </Link>
    </Box>
  );
};

export default StylizedBox;
