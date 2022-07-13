import React from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

export const ReviewCard = ({ review, currentUserIsAuthor }) => {
  //TODO: finish this
  //TODO: Need to make the user firestore container in order to get the username and photo
  //TODO: Figure out the date stuff for createdOn and editedOn
  const { authorUid, content = '', createdOn, editedOn } = review;

  return (
    <Box paddingY={2} paddingX={6}>
      <Card>
        <CardContent>
          <Stack direction={'column'} spacing={1}>
            <Typography variant='h5' component='div'>
              User avatar here | {currentUserIsAuthor ? 'You left this review' : 'Author name here'}
            </Typography>
            <Typography variant='body2' component='div' color='text.secondary'>
              Reviewed on: Review date here
            </Typography>
            <Typography variant='body1'>{content}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
