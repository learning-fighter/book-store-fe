import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Home.css'

export default class Home extends Component {
    render() {
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
                    <h2>Best Seller</h2>
                    <Row>
                        <Col>
                            <Card>
                                <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>Tumbuh Dari Luka</b></CardTitle>
                                    <CardTitle className="font-price">Rp. 90.000</CardTitle>
                                    <CardSubtitle className="card-subtitle">
                                        Author : Indra Sugiarto <br/>
                                        Stock : 20
                                    </CardSubtitle><br />
                                    <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                    <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>Tumbuh Dari Luka</b></CardTitle>
                                    <CardTitle className="font-price">Rp. 90.000</CardTitle>
                                    <CardSubtitle className="card-subtitle">
                                        Author : Indra Sugiarto <br/>
                                        Stock : 20
                                        
                                    </CardSubtitle><br />
                                    <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                    <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>Tumbuh Dari Luka</b></CardTitle>
                                    <CardTitle className="font-price">Rp. 90.000</CardTitle>
                                    <CardSubtitle className="card-subtitle">
                                        Author : Indra Sugiarto <br/>
                                        Stock : 20
                                        
                                    </CardSubtitle><br />
                                    <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                    <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>Tumbuh Dari Luka</b></CardTitle>
                                    <CardTitle className="font-price">Rp. 90.000</CardTitle>
                                    <CardSubtitle className="card-subtitle">
                                        Author : Indra Sugiarto <br/>
                                        Stock : 20
                                        
                                    </CardSubtitle><br />
                                    <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                    <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>Tumbuh Dari Luka</b></CardTitle>
                                    <CardTitle className="font-price">Rp. 90.000</CardTitle>
                                    <CardSubtitle className="card-subtitle">
                                        Author : Indra Sugiarto <br/>
                                        Stock : 20
                                        
                                    </CardSubtitle><br />
                                    <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                    <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container className="books-content">
                    <hr />
                    <h2>Latest Book</h2>
                    <Row>
                        <Col>
                            <Card>
                                <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>Tumbuh Dari Luka</b></CardTitle>
                                    <CardTitle className="font-price">Rp. 90.000</CardTitle>
                                    <CardSubtitle className="card-subtitle">
                                        Author : Indra Sugiarto <br />
                                        Stock : 20

                                    </CardSubtitle><br />
                                    <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                    <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>Tumbuh Dari Luka</b></CardTitle>
                                    <CardTitle className="font-price">Rp. 90.000</CardTitle>
                                    <CardSubtitle className="card-subtitle">
                                        Author : Indra Sugiarto <br />
                                        Stock : 20

                                    </CardSubtitle><br />
                                    <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                    <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>Tumbuh Dari Luka</b></CardTitle>
                                    <CardTitle className="font-price">Rp. 90.000</CardTitle>
                                    <CardSubtitle className="card-subtitle">
                                        Author : Indra Sugiarto <br />
                                        Stock : 20

                                    </CardSubtitle><br />
                                    <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                    <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>Tumbuh Dari Luka</b></CardTitle>
                                    <CardTitle className="font-price">Rp. 90.000</CardTitle>
                                    <CardSubtitle className="card-subtitle">
                                        Author : Indra Sugiarto <br />
                                        Stock : 20

                                    </CardSubtitle><br />
                                    <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                    <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top className="booksCover" src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>Tumbuh Dari Luka</b></CardTitle>
                                    <CardTitle className="font-price">Rp. 90.000</CardTitle>
                                    <CardSubtitle className="card-subtitle">
                                        Author : Indra Sugiarto <br />
                                        Stock : 20

                                    </CardSubtitle><br />
                                    <Button color="secondary" size="sm"><FontAwesomeIcon icon={faSearch} /> Detail</Button>
                                    <Button color="success" size="sm" className="button-cart"><FontAwesomeIcon icon={faCartPlus} /></Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}