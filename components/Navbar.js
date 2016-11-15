import React from 'react';
import {Navbar, Nav, NavItem, LinkContainer, NavDropdown, MenuItem, Collapse} from 'react-bootstrap';

var Header = React.createClass({
  render: function() {
    return (
      <div className="hdrStyle">
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Icelandic television schedules</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">k.fss.is</NavItem>
            <NavItem eventKey={2} href="#">apis.is</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
});
export default Header;
