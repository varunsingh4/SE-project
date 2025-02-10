// Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Paper, Typography, useTheme } from '@mui/material';
import ProjectCard from './ProjectCard';

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();

  const projects = Array.from({ length: 100 }).map((_, index) => ({
    id: index + 1,
    name: `Project ${index + 1}`,
    label: ['Stable', 'Reviving', 'Crisis'][index % 3],
    activity: ['High', 'Medium', 'Low'][index % 3]
  }));

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper style={{
      padding: 16,
      backgroundColor: 'transparent', // Set to transparent or use the same #263238 color
      color: theme.palette.text.primary
    }}>
      <Typography variant="h4" gutterBottom>
      InsightTracker OSS
      </Typography>
      <TextField 
        fullWidth
        label="Search Projects" 
        variant="outlined" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        style={{ marginBottom: 16 }}
      />
      <Grid container spacing={2}>
        {filteredProjects.map(project => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} onClick={() => navigate(`/project/${project.id}`)} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Dashboard;
