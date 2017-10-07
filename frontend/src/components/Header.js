import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  Nav
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <RRNavLink
            style={{ color: "white", width: "300px", fontWeight: "bold" }}
            className="lead"
            to="/"
          >
            Crowd Path
          </RRNavLink>
          {/* <NavbarToggler onClick={this.toggleNavbar} /> */}
          <Collapse isOpen={!this.state.collapsed} navbar>
            {" "}
            {/** HOC wrapping the NAV*/}
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink to="/" tag={RRNavLink}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Questions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Guide</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
