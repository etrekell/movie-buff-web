import React, { useState } from 'react';
import { IconButton, Stack, Tooltip } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReviewFormDialog } from './ReviewFormDialog';
import { BasicDialog } from './BasicDialog';
import { useAsync } from '../utilities/hooks/useAsync';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const ReviewActionButtonGroup = ({ userUid, movieInfo, existingReview }) => {
  const [showDialog, setShowDialog] = useState('none');
  const { run } = useAsync();

  // TODO: Add functionality for these buttons.
  // TODO: Use the async status for anything? Maybe the toast idea?

  const handleReviewDelete = () => {
    // This is the format I'm using for a review document id
    const reviewDocumentId = `${userUid}-${movieInfo.id}`;
    run(deleteDoc(doc(db, 'movie-reviews', reviewDocumentId)));
  };

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
        primaryAction={handleReviewDelete}
      />
      <ReviewFormDialog
        showDialog={showDialog === 'review'}
        setShowDialog={setShowDialog}
        userUid={userUid}
        movieInfo={movieInfo}
        existingReview={existingReview}
      />
    </>
  );
};
