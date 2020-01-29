import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import Footer from './components/Layout/Footer';
import { SearchBar, VideoDetail, VideoList } from './components';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

class App extends React.Component{
  state= {
    videos: [],
    selectedVideo: null,
  }

componentDidMount(){
  this.handleSubmit('jay z encore')
}

  onVideoSelect = (video) => {
    this.setState = ({selectedVideo: video});
    }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCH1Ns94E59X_QEQNmr7bdcerFLe6fiSvY',
        q: searchTerm,
    }


  });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }
  render (){
    const { selectedVideo, videos } = this.state;
    return(
      <MuiThemeProvider muiTheme={muiTheme}>

      <AppBar  style={{ textAlign: 'center' }}title="Kym's youtube app" />


      <Grid justify="center" container spacing={8}>
      <Grid item xs={12}>
      <Grid container spacing={8}>
      <Grid item xs={12}>
      <SearchBar onFormsumbit={this.handleSubmit} />
      </Grid>
       <Grid item xs={8}>
       <VideoDetail video={selectedVideo}/>
       </Grid>
       <Grid item xs={4}>
       <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
       </Grid>
      </Grid>
      </Grid>
     </Grid>
    <Footer />

     </MuiThemeProvider>
   );
  }
}

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: '50',

  },
});


export default App;
