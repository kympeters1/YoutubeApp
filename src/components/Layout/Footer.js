import React from 'react';

function Footer() {
  return (

    <footer style={footerStyle}>
    <h1 style={TextStyle}> Kym's youtube app </h1>
    <img src="./images/Kym-Peteson.png" alt=""/>
    </footer>
  )
}

const footerStyle ={
  color: 'white',
  backgroundColor: 'darkgrey',
  padding: '5px',
  marginTop:'80px'
}

const TextStyle={
  textAlign:'center',
}

export default Footer;
