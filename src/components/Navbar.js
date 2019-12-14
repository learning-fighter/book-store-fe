import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="info" light expand="md">
                <Link to="/"><NavbarBrand><img src={require('./LearningFighter.PNG')} className="img-navbar" /></NavbarBrand></Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="navbar-custom"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/books" className="navbar-custom"><FontAwesomeIcon icon={faBook} /> Books</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/cart" className="navbar-custom"><FontAwesomeIcon icon={faShoppingCart} /> Cart</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <FontAwesomeIcon icon={faUser} /> Account
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Sign In
                                </DropdownItem>
                                <DropdownItem>
                                    Sign Out
                                </DropdownItem>
                                <DropdownItem>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;