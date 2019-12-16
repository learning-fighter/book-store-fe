import React, { Component } from "react";
import { Container, Row, Col, Button, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Cart.css'

export default class Cart extends Component {
    render() {
        return (
            <div className="content">
                <Container className="cart-content">
                    <Row>
                        <Col md="8">
                            <Row className="cart-item">
                                <Col md="1" className="btn-remove" className="btn-remove">
                                    <span>
                                        <Link>
                                            <FontAwesomeIcon icon={faTimes} className="btn-delete-cart" />
                                        </Link>
                                    </span>
                                </Col>
                                <Col md="2">
                                    <img src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" className="cart-cover" />
                                </Col>
                                <Col md="9">
                                    <table>
                                        <tr>
                                            <td colSpan="3"><h3>Tumbuh Dari Luka</h3></td>
                                        </tr>
                                        <tr>
                                            <td>Author</td>
                                            <td>:</td>
                                            <td>Indra Sugiarto</td>
                                        </tr>
                                        <tr>
                                            <td>Qty</td>
                                            <td>:</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>:</td>
                                            <td>Rp. 90.000</td>
                                        </tr>
                                    </table>
                                </Col>
                            </Row>
                            <Row className="cart-item">
                                <Col md="1" className="btn-remove">
                                    <span>
                                        <Link>
                                            <FontAwesomeIcon icon={faTimes} className="btn-delete-cart" />
                                        </Link>
                                    </span>
                                </Col>
                                <Col md="2">
                                    <img src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" className="cart-cover" />
                                </Col>
                                <Col md="9">
                                    <table>
                                        <tr>
                                            <td colSpan="3"><h3>Tumbuh Dari Luka</h3></td>
                                        </tr>
                                        <tr>
                                            <td>Author</td>
                                            <td>:</td>
                                            <td>Indra Sugiarto</td>
                                        </tr>
                                        <tr>
                                            <td>Qty</td>
                                            <td>:</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>:</td>
                                            <td>Rp. 90.000</td>
                                        </tr>
                                    </table>
                                </Col>
                            </Row>
                            <Row className="cart-item">
                                <Col md="1" className="btn-remove">
                                    <span>
                                        <Link>
                                            <FontAwesomeIcon icon={faTimes} className="btn-delete-cart" />
                                        </Link>
                                    </span>
                                </Col>
                                <Col md="2">
                                    <img src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" className="cart-cover" />
                                </Col>
                                <Col md="9">
                                    <table>
                                        <tr>
                                            <td colSpan="3"><h3>Tumbuh Dari Luka</h3></td>
                                        </tr>
                                        <tr>
                                            <td>Author</td>
                                            <td>:</td>
                                            <td>Indra Sugiarto</td>
                                        </tr>
                                        <tr>
                                            <td>Qty</td>
                                            <td>:</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>:</td>
                                            <td>Rp. 90.000</td>
                                        </tr>
                                    </table>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="4">
                            <div className="p-3 my-2 rounded bg-price">
                                <Toast>
                                    <ToastHeader>
                                        <h5 className="font-title-cart ">Total Price</h5>
                                    </ToastHeader>
                                    <ToastBody>
                                        <p className="font-price-cart">Rp. 120.000</p>
                                        <br />
                                        <Button size="sm">Checkout</Button>
                                    </ToastBody>
                                </Toast>
                            </div>
                        </Col>
                    </Row>
                   
                </Container>
            </div>
        );
    }
}