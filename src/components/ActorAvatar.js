import React from 'react';
import { Avatar, Box, Tooltip, Typography } from '@mui/material';

export const ActorAvatar = ({ actor }) => {
  const { name, character, profile_path: profilePath } = actor ?? null;
  const headShot = profilePath ? `https://image.tmdb.org/t/p/w300${profilePath}` : '';

  const toolTipTitle = (
    <>
      <Typography variant='body1'>{name ?? ''}</Typography>
      <Typography variant='body2'>{character ?? ''}</Typography>
    </>
  );

  return actor ? (
    <>
      <Box>
        <Tooltip title={toolTipTitle}>
          <Avatar
            variant='rounded'
            sx={{ width: '75px', height: '75px' }}
            src={headShot ?? ''}
            alt={`${name ?? 'actor'} headshot`}
          />
        </Tooltip>
      </Box>
    </>
  ) : (
    <></>
  );
};
