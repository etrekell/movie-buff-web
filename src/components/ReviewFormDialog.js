import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useAsync } from '../utilities/hooks/useAsync';

export const ReviewFormDialog = ({ showDialog, setShowDialog, userUid, movieInfo, existingReview }) => {
  // TODO: If user has left a review for this movie before, ask them if they want to edit it
  // TODO: Once we implement the user context, we should be able to use that for the userUid
  // TODO: This is for adding to the array(s): https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array
  // TODO: Need render based on async status? - Maybe have a "toast" type message that says if it was posted or not, mui has something like this
  const { run } = useAsync();
  const [value, setValue] = React.useState(existingReview);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      authorUid: userUid,
      content: value,
      createdOn: '',
      modifiedOn: '',
      movieId: movieInfo.id,
    };

    // This is the format I'm using for a review document id
    const reviewDocumentId = `${userUid}-${movieInfo.id}`;
    run(setDoc(doc(db, 'movie-reviews', reviewDocumentId), reviewData));
    setShowDialog('none');
  };

  return (
    <Dialog open={showDialog} aria-labelledby='dialog-title'>
      <form onSubmit={handleSubmit}>
        <DialogTitle id='dialog-title'>
          {existingReview ? 'You already wrote a review for this movie.' : 'Write a review:'}
        </DialogTitle>
        <DialogContent>
          {existingReview ? (
            <Typography pb={2} variant='body1'>
              Want to edit it?
            </Typography>
          ) : (
            <></>
          )}
          <TextField
            multiline
            style={{ width: 500 }}
            minRows={5}
            fullWidth
            autoFocus={!value}
            onChange={handleChange}
            value={value}
            id='reviewContent'
            // TODO: style movie title as bold or something to make it stand out a bit
            placeholder={`I thought ${movieInfo.title} was...`}
            variant='outlined'
            size='small'
            margin='dense'
            type='text'
            required
          />
        </DialogContent>
        <DialogActions>
          <Button type='submit' variant='contained'>
            Submit
          </Button>
          <Button onClick={() => setShowDialog('none')}>Back</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
