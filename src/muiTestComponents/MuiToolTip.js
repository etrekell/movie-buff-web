import React from 'react';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const MuiToolTip = () => {
  return (
    <>
      <Tooltip title='Delete'>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip placement='right' title='Right Delete'>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip arrow title='Delete with arrow'>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip enterDelay={500} leaveDelay={1000} title='Delete with delay'>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe'>
        <Avatar sx={{ bgcolor: 'purple' }}>JD</Avatar>
      </Tooltip>
    </>
  );
};
