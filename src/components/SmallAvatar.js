import React from 'react';
import { Avatar } from '@mui/material';

export const SmallAvatar = ({ displayName = '', imageURL = '' }) => {
  const initial = displayName[0];

  // Gives a default color (For fun!)
  const getColor = () => {
    if (imageURL || !initial) {
      return;
    }
    if (!initial.match(/[a-zA-Z]/)) {
      return '#2dd881';
    }
    switch (initial.toLowerCase()) {
      case 'a':
      case 'f':
      case 'k':
      case 'p':
      case 'u':
      case 'z':
        return '#1be7ff';
      case 'b':
      case 'g':
      case 'l':
      case 'q':
      case 'v':
        return '#c60f7b';
      case 'c':
      case 'h':
      case 'm':
      case 'r':
      case 'w':
        return '#ff8600';
      case 'd':
      case 'i':
      case 'n':
      case 's':
      case 'x':
        return '#4f359b';
      case 'e':
      case 'j':
      case 'o':
      case 't':
      case 'y':
        return '#2dd881';
      default:
        return '';
    }
  };

  return (
    <Avatar sx={{ width: '30px', height: '30px', bgcolor: getColor() }} src={imageURL} alt={displayName}>
      {initial}
    </Avatar>
  );
};
