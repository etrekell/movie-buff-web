import React from 'react';
import { Divider, Typography } from '@mui/material';
import { ReviewCard } from './cards/ReviewCard';

export const ReviewSection = () => {
  // TODO: This will need user and the reviews array
  // TODO: If reviews array is empty say something like "This movie hasn't been reviewed.

  return (
    <>
      <Divider sx={{ paddingBottom: 2 }}>
        <Typography variant='h5'>Audience Reviews</Typography>
      </Divider>
      {/* TODO: This will loop through the reviews array.*/}
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </>
  );
};
