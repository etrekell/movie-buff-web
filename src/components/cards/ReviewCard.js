import React, { useEffect } from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useAsync } from '../../utilities/hooks/useAsync';
import { SmallAvatar } from '../SmallAvatar';

export const ReviewCard = ({ review, currentUserIsAuthor }) => {
  //TODO: finish this
  //TODO: Figure out the date stuff for createdOn and editedOn
  const { authorUid, content = '', createdOn, editedOn } = review;
  const { data, run, isLoading, isIdle, isSuccess, error } = useAsync();
  const authorInfoPlaceHolder = {
    displayName: '',
    favoriteMovies: [],
    movieWatchList: [],
    photoURL: '',
  };

  useEffect(() => {
    if (!authorUid) {
      return;
    }
    const userInfoRef = doc(db, 'user-info', authorUid);
    run(getDoc(userInfoRef));
  }, [run]);

  const authorInfo = isSuccess ? { ...data.data() } : authorInfoPlaceHolder;

  return (
    <Box paddingY={2} paddingX={6}>
      <Card>
        <CardContent>
          <Stack direction={'column'}>
            <Stack direction='row' spacing={1}>
              <SmallAvatar displayName={authorInfo.displayName} imageURL={authorInfo.photoURL ?? ''} />
              <Typography variant='subtitle1' component='div'>
                {/*TODO: Once we can update reviews, put that option here*/}
                {currentUserIsAuthor ? 'You' : authorInfo.displayName ?? ''}
              </Typography>
            </Stack>
            <Typography variant='subtitle2' component='div' color='text.secondary'>
              Reviewed on Review date here
            </Typography>
            <Typography variant='body1'>{content}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
