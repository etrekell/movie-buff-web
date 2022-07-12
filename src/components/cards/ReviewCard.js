import React from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

export const ReviewCard = () => {
  //TODO: finish this
  return (
    <Box paddingY={2} paddingX={6}>
      <Card>
        <CardContent>
          <Stack direction={'column'} spacing={1}>
            <Typography variant='h5' component='div'>
              User avatar here | User name here
            </Typography>
            <Typography variant='body2' component='div' color='text.secondary'>
              Reviewed on: Review date here
            </Typography>
            <Typography variant='body1'>Love it</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
