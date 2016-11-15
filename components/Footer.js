import React from 'react';

var Footer = React.createClass({
  render: function () {
    var FooterStyle = {
      backgroundColor: "#101010",
      position: "fixed",
      right: 0,
      bottom: 0,
      left: 0,
      fontSize: 12,
      textAlign: "center",
      border: "#101010",
    };
    var namestyle = {
      color: 'white',
    };
    var vshstyle = {
      color: 'white',
    };
    return (
      <div class="container" style={FooterStyle}>
        <div style={namestyle}>
          Ari Steinn Guðmundsson
        </div>
        <div style={vshstyle}>
          Vefsíðuhönnun 303 2016
        </div>
        <div>
          <a href="https://github.com/aristeinn">https://github.com/aristeinn</a>
        </div>
      </div>
    );
  }
});
export default Footer;