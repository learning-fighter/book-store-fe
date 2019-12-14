import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default class Users extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="page-title">Users List</h1>
                            <Link to="/addUser"><FontAwesomeIcon icon={faPlus} /> Add User</Link>
                            <br /><br />
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Full Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Novel</td>
                                        <td>Novel</td>
                                        <td>Novel</td>
                                        <td>
                                            <Link to=""><FontAwesomeIcon icon={faEdit} className="margin-right" /></Link>
                                            <Link to=""><FontAwesomeIcon icon={faTrashAlt} /></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}