import React from 'react';
import { Box, Grid } from '@mui/material';

export const MuiGridTest = () => {
  return (
    <>
      <Grid container p={10} spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='blueviolet' p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='orangered' p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='forestgreen' p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
