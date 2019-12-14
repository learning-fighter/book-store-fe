import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

export default class Cart extends Component {
    render() {
        return (
            <div className="content">
                <Container className="cart-content">
                    <Row>
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
                            </table>
                        </Col>
                        <Col md="1">
                            <Button color="danger" size="sm"><FontAwesomeIcon icon={faTimes} /></Button>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
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
                            </table>
                        </Col>
                        <Col md="1">
                            <Button color="danger" size="sm"><FontAwesomeIcon icon={faTimes} /></Button>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
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
                            </table>
                        </Col>
                        <Col md="1">
                            <Button color="danger" size="sm"><FontAwesomeIcon icon={faTimes} /></Button>
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </div>
        );
    }
}