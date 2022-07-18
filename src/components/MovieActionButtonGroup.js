import React, { useState } from 'react';
import { IconButton, Stack, Tooltip } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { ReviewFormDialog } from './ReviewFormDialog';

export const MovieActionButtonGroup = ({ movieId, userUid, movieInfo }) => {
  const [showDialog, setShowDialog] = useState('none');

  return (
    <>
      {/*TODO: Figure this out for favoriting a movie. Maybe use ToggleButton? (And add tooltip)*/}
      <Stack direction='row'>
        {/* TODO: Make these buttons dynamic and turn on / off based on if the user has them favorited, etc.*/}
        <Tooltip title='Add to your favorites'>
          <IconButton>
            <FavoriteBorderOutlinedIcon size='large' />
          </IconButton>
        </Tooltip>
        <Tooltip title='Add to your watch list'>
          <IconButton size='large'>
            <PlaylistAddCheckOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Write a review'>
          <IconButton onClick={() => setShowDialog('review')}>
            <CreateOutlinedIcon size='large' />
          </IconButton>
        </Tooltip>
      </Stack>
      <ReviewFormDialog
        showDialog={showDialog === 'review'}
        setShowDialog={setShowDialog}
        movieId={movieId}
        userUid={userUid}
        movieInfo={movieInfo}
      />
    </>
  );
};
