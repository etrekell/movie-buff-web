import React, { useState } from 'react';
import { IconButton, Stack, Tooltip } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReviewFormDialog } from './ReviewFormDialog';
import { BasicDialog } from './BasicDialog';

export const ReviewActionButtonGroup = ({ movieTitle, movieId, userUid }) => {
  const [showDialog, setShowDialog] = useState('none');

  // TODO: Add functionality for these buttons.

  return (
    <>
      <Stack direction='row'>
        <Tooltip title='Edit your review'>
          <IconButton onClick={() => setShowDialog('review')}>
            <CreateOutlinedIcon size='small' />
          </IconButton>
        </Tooltip>
        <Tooltip title='Delete your review'>
          <IconButton onClick={() => setShowDialog('confirmDelete')}>
            <DeleteIcon size='small' />
          </IconButton>
        </Tooltip>
      </Stack>
      {/*TODO: customize this for editing, not adding*/}
      <BasicDialog
        showDialog={showDialog === 'confirmDelete'}
        setShowDialog={setShowDialog}
        title='Are you sure you want to delete your review?'
        body={`You can't undo this!`}
        primaryButtonText='Delete'
        // TODO: Add the primary action (deleting the record)
        secondaryAction={() => setShowDialog('none')}
      />
      <ReviewFormDialog
        showDialog={showDialog === 'review'}
        setShowDialog={setShowDialog}
        movieTitle={movieTitle}
        movieId={movieId}
        userUid={userUid}
      />
    </>
  );
};
