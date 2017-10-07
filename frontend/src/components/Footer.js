import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" style={{ color: "grey" }}>
            CrowdPath
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="" style={{ color: "white" }}>
                  Help
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" style={{ color: "white" }}>
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" style={{ color: "white" }}>
                  About
                </NavLink>
              </NavItem>
              <p class="navbar-text" style={{ color: "grey" }}>
                Developed for OpenHack
              </p>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Footer
