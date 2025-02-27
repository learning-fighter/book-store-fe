import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, InputGroup, InputGroupAddon, Input  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom'
import axios from "axios"
import './Books.css'

export default class Books extends Component {
    state = {
        data: null,
        search: '',
        category: ''
    }
    async componentWillMount() {
        const requestBooks = await axios.get('http://localhost:8000/book')
        const requestCategories = await axios.get('http://localhost:8000/category')
        this.setState({data:requestBooks.data})
        this.setState({categoriesData:requestCategories.data})
    }

    onSearch = (e) => {
        this.setState({search: e.target.value})
    }

    render() {
        const { data, search, categoriesData } = this.state
        const userData = localStorage.getItem('userData')
            ? JSON.parse(localStorage.getItem('userData'))
            : null
        let filteredData = []
        if (data) {
            filteredData = data.filter((book) => {
                return book.title.toLowerCase().includes(search.toLowerCase())
            })
        }
        
        return (
            <div className="content">
                <Container className="books-search">
                    <Row>
                        <Col md="3">
                            <Input type="select" name="select" id="exampleSelect">
                                <option>All</option>
                                {categoriesData && categoriesData.map((categories, key) => (
                                    <option>{categories.categoryName}</option>
                                ))}
                            </Input>
                        </Col>
                        <Col md="9">
                            <div class="d-flex justify-content-center">
                                <InputGroup>
                                    <Input placeholder="Find the title of the book you want" value={search} onChange={this.onSearch}/>
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
                    {!filteredData && (
                        <h2>Loading ...</h2>
                    )}
                    <Row>
                        {filteredData && filteredData.map((book, key) => (
                            <Col md="2">
                                <Card className="main-card">
                                    <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                    <CardBody className="card-body">
                                        <CardTitle className="card-title"><b>{book.title}</b></CardTitle>
                                        <CardTitle className="card-title"><NumberFormat className="font-price" value={book.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /><br /></CardTitle>
                                        <CardSubtitle className="card-subtitle">
                                            Author : {book.author} <br />
                                            Stock : {book.stock}
                                        </CardSubtitle><br />
                                            <font>
                                                <Link to={`/detail/${book._id}`} ><FontAwesomeIcon icon={faInfoCircle} /> Detail</Link>
                                                {!userData ? (
                                                    <>

                                                    </>
                                                ) : (
                                                        <Link to="" className="action-card"><FontAwesomeIcon icon={faCartPlus} /> Add</Link>
                                                    )}
                                            </font>
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