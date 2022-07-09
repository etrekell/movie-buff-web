import React from 'react';
import { Avatar, AvatarGroup, Stack } from '@mui/material';
import noHeadshotAvail from '../images/no-headshot-avail.png';

export const MuiAvatars = () => {
  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={2}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
        <Avatar>?</Avatar>
      </Stack>
      <Stack direction='row' spacing={2}>
        <AvatarGroup>
          <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
          <Avatar src='https://randomuser.me/api/portraits/women/70.jpg' alt='Jane Doe'></Avatar>
        </AvatarGroup>
        <Avatar src='https://randomuser.me/api/portraits/men/20.jpg' alt='John Doe'></Avatar>
        <Avatar src={noHeadshotAvail} alt='John Doe'></Avatar>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Avatar sx={{ bgcolor: 'primary.light', width: '100px', height: '100px' }}>BW</Avatar>
        <AvatarGroup max={3}>
          <Avatar variant='square' sx={{ bgcolor: 'primary.light', width: '100px', height: '100px' }}>
            BW
          </Avatar>
          <Avatar variant='rounded' sx={{ bgcolor: 'primary.light', width: '100px', height: '100px' }}>
            BW
          </Avatar>
          <Avatar variant='rounded' sx={{ bgcolor: 'primary.light', width: '100px', height: '100px' }}>
            BW
          </Avatar>
          <Avatar variant='rounded' sx={{ bgcolor: 'primary.light', width: '100px', height: '100px' }}>
            BW
          </Avatar>
          <Avatar variant='rounded' sx={{ bgcolor: 'primary.light', width: '100px', height: '100px' }}>
            BW
          </Avatar>
        </AvatarGroup>
        <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
        <Avatar>?</Avatar>
      </Stack>
    </Stack>
  );
};
