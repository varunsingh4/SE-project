// ProjectCard.js
import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card 
      onClick={onClick} 
      raised 
      sx={{ 
        backgroundColor: '#37474F', // Set the background color of the card
        borderRadius: '16px', // Adds curved corners
        '&:hover': { 
          transform: "scale(1.05)", 
          transition: "transform 0.3s" 
        },
        color: '#fff' // Set text color to white for better visibility
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">{project.name}</Typography>
          <Typography color="textSecondary">{project.label}</Typography>
          <Typography color="textSecondary">{project.activity}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
