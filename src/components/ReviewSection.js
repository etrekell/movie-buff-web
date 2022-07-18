import React, { useState } from 'react';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { ReviewCard } from './cards/ReviewCard';
import { ReviewFormDialog } from './ReviewFormDialog';

export const ReviewSection = ({ user, movieInfo }) => {
  const [showDialog, setShowDialog] = useState('none');

  return (
    <>
      <Divider sx={{ paddingBottom: 2 }}>
        <Typography variant='h5'>Audience Reviews</Typography>
      </Divider>
      {movieInfo.reviews.length ? (
        movieInfo.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} userId={user.uid} movieInfo={movieInfo} />
        ))
      ) : (
        <>
          <Stack>
            <Typography variant='subtitle1' sx={{ textAlign: 'center', fontSize: '1em' }}>
              This movie doesn't have any reviews yet.
            </Typography>
            <Box textAlign='center'>
              <Button onClick={() => setShowDialog('review')} style={{ maxWidth: '100px' }}>
                Write one!
              </Button>
            </Box>
          </Stack>
        </>
      )}
      <ReviewFormDialog
        showDialog={showDialog === 'review'}
        setShowDialog={setShowDialog}
        userUid={user.uid}
        movieInfo={movieInfo}
      />
    </>
  );
};
