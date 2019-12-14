import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import { Link } from 'react-router-dom'

export default class Users extends Component {
    state = {data:null}
    async componentWillMount() {
        const request = await axios.get('http://localhost:8000/users')
        this.setState({data:request.data})
    }
    render() {
        const {data} = this.state                
        return (
            <div>
                <Container>
                    {!data && (
                        <h2>Loading ...</h2>
                    )}
                    <Row>
                        <Col>
                            <h1 className="page-title">Users List</h1>
                            <Link to="/addUser"><FontAwesomeIcon icon={faPlus} /> Add User</Link>
                            <br /><br />
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data && data.map((users, key) => (
                                    <tr>
                                        <td>{users.name}</td>
                                        <td>{users.email}</td>
                                        <td>
                                            <Link to=""><FontAwesomeIcon icon={faEdit} className="margin-right" /></Link>
                                            <Link to=""><FontAwesomeIcon icon={faTrashAlt} /></Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}