import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, InputGroup, InputGroupAddon, Input  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import './Books.css'

export default class Books extends Component {
    state = {data:null}
    async componentWillMount() {
        const request = await axios.get('http://localhost:8000/book')
        this.setState({data:request.data})
    }
    render() {
        const {data} = this.state
        return (
            <div className="content">
                <Container className="books-search">
                    <Row>
                        <Col md="2">
                            <Input type="select" name="select" id="exampleSelect">
                                <option>All</option>
                                <option>Novel</option>
                                <option>Comic</option>
                                <option>Programming</option>
                                <option>Design</option>
                            </Input>
                        </Col>
                        <Col md="10">
                            <div class="d-flex justify-content-center">
                                <InputGroup>
                                    <Input placeholder="Find the title of the book you want" />
                                    <InputGroupAddon addonType="append">
                                        <Button color="primary"><FontAwesomeIcon icon={faSearch} /></Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="books-content">
                    <h2>Book Collection</h2>
                    {!data && (
                        <h2>Loading ...</h2>
                    )}
                    <Row>
                        {data && data.map((book, key) => (
                            <Col md="3">
                                <Card>
                                    <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle><b>{book.title}</b></CardTitle>
                                        <CardTitle className="font-price">Rp. {book.price}</CardTitle>
                                        <CardSubtitle className="card-subtitle">
                                            Author : {book.author} <br />
                                            Stock : {book.stock}
                                        </CardSubtitle><br />
                                        <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                        <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}