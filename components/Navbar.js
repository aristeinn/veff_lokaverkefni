import React from 'react';
import { Navbar, Nav, NavItem, LinkContainer, NavDropdown, MenuItem, Collapse } from 'react-bootstrap';//importa allt sem þarf fyrir navbarinn
//header component búinn til
var Header = React.createClass({
  render: function () {
    return (
          <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Sjónvarpsdagskrár</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="http://k.fss.is/">k.fss.is</NavItem>
                <NavItem eventKey={2} href="http://docs.apis.is/">apis.is</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
  }
});
export default Header;
