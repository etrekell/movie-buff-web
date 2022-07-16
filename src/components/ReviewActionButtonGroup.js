import React, { useState } from 'react';
import { IconButton, Stack, Tooltip } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReviewFormDialog } from './ReviewFormDialog';

export const ReviewActionButtonGroup = ({ movieTitle, movieId, userUid }) => {
  const [showReviewDialog, setShowReviewDialog] = useState(false);

  // TODO: Add functionality for these buttons. And a "Are you sure" pop up for deleting

  return (
    <>
      <Stack direction='row'>
        <Tooltip title='Edit your review'>
          <IconButton onClick={() => setShowReviewDialog(true)}>
            <CreateOutlinedIcon size='small' />
          </IconButton>
        </Tooltip>
        <Tooltip title='Delete your review'>
          <IconButton size='small'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      {/*TODO: customize this for editing, not adding*/}
      <ReviewFormDialog
        showDialog={showReviewDialog}
        setShowDialog={setShowReviewDialog}
        movieTitle={movieTitle}
        movieId={movieId}
        userUid={userUid}
      />
    </>
  );
};
