import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "./Books.css"

export default class BookList extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="page-title">Book List</h1>
                            <Link to="/addBook"><FontAwesomeIcon icon={faPlus} /> Add Book</Link>
                            <br /><br />
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Category</th>
                                        <th>Title</th>
                                        <th>Author</th>
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
                                            <Link to=""><FontAwesomeIcon icon={faInfoCircle} className="margin-right" /></Link>
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