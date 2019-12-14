import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import { Link } from 'react-router-dom'
import './Categories.css'

export default class Categories extends Component {
    state = {data:null}
    async componentWillMount() {
        const request = await axios.get('http://localhost:8000/category')
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
                            <h1 className="page-title">Categories</h1>
                            <Link to="/addCategory"><FontAwesomeIcon icon={faPlus} /> Add Category</Link>
                            <br /><br />
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>Category Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data && data.map((category, key) => (
                                    <tr>
                                        <td>{category.categoryName} </td>
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