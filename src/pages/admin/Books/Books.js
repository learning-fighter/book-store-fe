import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import { Link } from 'react-router-dom'
import "./Books.css"

export default class BookList extends Component {
    state = {data:null}
    async componentWillMount() {
        const request = await axios.get('http://localhost:8000/book')
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
                            <h1 className="page-title">Book List</h1>
                            <Link to="/addBook"><FontAwesomeIcon icon={faPlus} /> Add Book</Link>
                            <br /><br />
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data && data.map((book, key) => (
                                    <tr>
                                        <td>{book.category.categoryName} </td>
                                        <td>{book.title} </td>
                                        <td>{book.author} </td>
                                        <td>
                                            <Link to=""><FontAwesomeIcon icon={faInfoCircle} className="margin-right" /></Link>
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