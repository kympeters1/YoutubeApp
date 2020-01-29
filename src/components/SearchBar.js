import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {

state = {
  searchTerm: '',
}

handleChange = (event) => this.setState({searchTerm : event.target.value});


handleSubmit = (event) => {
  const { searchTerm } = this.state;
  const { onFormsumbit } = this.props;

  onFormsumbit(searchTerm);

  event.preventDefault();
}


render(){
  return(
    <Paper elevaton={6} style={{ backgroundColor: 'grey', padding: '25px',}}>
        <form onSubmit={this.handleSubmit}>
        <TextField fullWidth label="Search..." onChange={this.handleChange}/>
        </form>
    </Paper>
  );
  }
}

export default SearchBar;
