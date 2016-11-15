import React from 'react'
import { render } from 'react-dom'
import Header from './Navbar'
import Footer from './Footer'
import Api from './Api'

var App = React.createClass({
  render: function(){
    return <div>
    <Header/>
    <Api/>
    <Footer/>
    </div>
  }
});

export default App;
