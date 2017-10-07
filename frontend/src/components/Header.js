import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" className="navbar-dark navbar-expand-lg">
          <NavbarToggler type="button" className="navbar-toggler navbar-toggler-right" onClick={this.toggleNavbar} />
          <NavbarBrand href="/">CrowdPath</NavbarBrand>
          <Collapse className="navbar-collapse" isOpen={!this.state.collapsed}>
            {" "}
            {/** HOC wrapping the NAV*/}
            <Nav navbar>
              <NavItem>
                <NavLink to="/" tag={RRNavLink}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Questions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Guide</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
