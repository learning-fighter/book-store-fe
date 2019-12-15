import React, { useState } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom'
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
import axios from 'axios'

const Navigation = (props) => {
    console.log(props)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = async (token) => {
        await axios.post('http://localhost:8000/users/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        localStorage.removeItem('userData')
        props.history.push('/login')
    }

    return (
        <div>
            <Navbar color="info" light expand="md">
                <Link to="/"><NavbarBrand><img src={require('./img/LearningFighter.PNG')} className="img-navbar" /></NavbarBrand></Link>
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
                                <FontAwesomeIcon icon={faUser} /> {props.userData ? props.userData.user.name : '-'}
                            </DropdownToggle>
                            <DropdownMenu right>
                                {!props.userData ? (
                                    <>
                                    <Link to="/login">
                                        <DropdownItem>
                                            Sign In
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/register">
                                        <DropdownItem>
                                            Sign Up
                                        </DropdownItem>
                                    </Link>
                                    </>
                                ) : (
                                    <DropdownItem onClick={() => handleLogout(props.userData.token)}>
                                        Logout
                                    </DropdownItem>
                                )}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default withRouter(Navigation);