import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

export const BasicDialog = ({
  showDialog,
  setOpenDialog,
  title,
  body = '',
  primaryButtonText = 'Ok',
  secondaryButtonText = 'Cancel',
  primaryAction = null,
  secondaryAction = null,
}) => {
  const handlePrimaryClick = () => {
    if (primaryAction) {
      primaryAction();
    }
    setOpenDialog('none');
  };

  const handleSecondaryClick = () => {
    if (secondaryAction) {
      secondaryAction();
    }
    setOpenDialog('none');
  };

  return (
    <Dialog open={showDialog} aria-labelledby='dialog-title'>
      <DialogTitle id='dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <Typography variant='body1'>{body}</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={handlePrimaryClick}>
          {primaryButtonText}
        </Button>
        {secondaryAction ? <Button onClick={handleSecondaryClick}>{secondaryButtonText}</Button> : <></>}
      </DialogActions>
    </Dialog>
  );
};
