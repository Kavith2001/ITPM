import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const WidgetContainer = styled(Box)(({ theme }) => ({
  padding: '1rem',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '0.75rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px', // Adjust the height as needed
  width: '200px', // Adjust the width as needed
}));

const ImageIcon = styled('img')({
  width: '80px', // Adjust the size of the image icon
  height: '80px', // Adjust the size of the image icon
  marginBottom: '0.5rem',
});

const GenericWidget = ({ iconSrc, heading }) => {
  return (
    <WidgetContainer>
      <ImageIcon src={iconSrc} alt="Icon" />
      <Typography variant="h6">{heading}</Typography>
    </WidgetContainer>
  );
};

export default GenericWidget;
