import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({video, onVideoSelect}) =>{

  return (
    <Grid item xs='auto'>
    <Paper style={{ height:'100%', width:'110%', padding: '20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    onClick ={() => onVideoSelect(video)}>
    <img style ={{padding:'10px', height:'100%', width:'60%'}} alt="thumbnail"
    src={video.snippet.thumbnails.medium.url}/>
    <Typography variant='subtitle2'> <b>{video.snippet.title}</b> </Typography>
    </Paper>
    </Grid>
  );
};

export default VideoItem;
