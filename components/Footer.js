import React from 'react';

var Footer = React.createClass({
  render: function () {
    var FooterStyle = {
      backgroundColor: "#E4E4E4",
      position: "absolute",
      right: 0,
      bottom: 0,
      left: 0,
    };
    var CenterStyle = {
      textAlign: "center",
      fontSize: 20,
    };
    var RightStyle = {
      textAlign: "right",
      fontSize: 20,
    };
    var LeftStyle = {
      textAlign: "right",
      fontSize: 20,
      height: 20
    };
    return (
      <div style={FooterStyle}>
        <h5 style={CenterStyle}>Ari Steinn Guðmundsson</h5>
        <h5 style={RightStyle}>Vefsíðuhönnun 303 2016</h5>
        <h5><a href="https://github.com/aristeinn" style={LeftStyle}>https://github.com/aristeinn</a></h5>
      </div>
    );
  }
});
export default Footer;
