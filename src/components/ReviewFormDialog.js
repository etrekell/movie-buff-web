import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

export const ReviewFormDialog = ({ showDialog, setShowDialog, movieTitle }) => {
  // TODO: If user has left a review for this movie before, ask them if they want to edit it

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Make the onSubmit stuff
    setShowDialog(false);
  };

  return (
    <Dialog open={showDialog} aria-labelledby='dialog-title'>
      <form onSubmit={handleSubmit}>
        <DialogTitle id='dialog-title'>{'Write a review:'}</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            style={{ width: 500 }}
            minRows={5}
            fullWidth
            autoFocus
            id='review'
            placeholder={`I thought ${movieTitle} was...`}
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
          <Button onClick={() => setShowDialog(false)}>Back</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
