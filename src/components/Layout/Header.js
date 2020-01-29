import React from 'react';

function Header () {
  return (

    <header style={headerStyle}>
    <h1 style={TextStyle}> Kym's youtube app </h1>
    <img src="" alt=""/>
    </header>
  )
}

const headerStyle={
  color: 'white',
  backgroundColor: 'darkblue',
  padding: '10px',
}

const TextStyle={
  textAlign:'center',
}

export default Header;
