import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneSquareAlt, faHourglassHalf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <Container fluid={true} className="footer">
                <Row>
                    <Col className="sub-footer">
                        <h4 className="title-footer">ABOUT US</h4>
                        <Link to="/"><img src={require('./img/LearningFighter.PNG')} className="img-footer" /></Link>
                        <div className="footer-content">
                            <table>
                                <tr>
                                    <td width="6%"><FontAwesomeIcon icon={faMapMarkerAlt} /></td>
                                    <td width="70%">Kp. Sindang Mulya 03/19 Ds. Karamat Mulya Kec. Soreang Kab. Bandung, Jawa Barat (40914)</td>
                                </tr>
                                <tr>
                                    <td><FontAwesomeIcon icon={faPhoneSquareAlt} /></td>
                                    <td>081320505661</td>
                                </tr>
                                <tr>
                                    <td><FontAwesomeIcon icon={faEnvelope} /></td>
                                    <td>office@learningfighter.com</td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                    <Col className="sub-footer">
                        <h4 className="title-footer">OPERATIONAL HOUR</h4>
                        <div className="footer-content">
                            <table>
                                <tr>
                                    <th width="140px">Sunday</th>
                                    <td>08.00 - 20.00</td>
                                </tr>
                                <tr>
                                    <th>Monday - Thursday</th>
                                    <td>08.00 - 20.00</td>
                                </tr>
                                <tr>
                                    <th>Friday</th>
                                    <td>07.30 - 20.00</td>
                                </tr>
                                <tr>
                                    <th>Saturday</th>
                                    <td>08.00 - 14.00</td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                    <Col className="sub-footer">
                        <h4 className="title-footer">PAYMENT METHOD</h4>
                        <div className="footer-content">
                            <Row>
                                <Col>
                                    <img src={require('./img/logo-mandiri.png')} className="img-payment" />
                                </Col>
                                <Col>
                                    <img src={require('./img/logo-bca.PNG')} className="img-payment" />
                                </Col>
                                <Col>
                                    <img src={require('./img/logo-bri.PNG')} className="img-payment" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={require('./img/logo-bni.PNG')} className="img-payment" />
                                </Col>
                                <Col>
                                    <img src={require('./img/logo-alfamart.png')} className="img-payment" />
                                </Col>
                                <Col>
                                    <img src={require('./img/logo-indomart.PNG')} className="img-payment" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="sub-footer">
                        <h4 className="title-footer">SHIPPING METHOD</h4>
                        <div className="footer-content">
                            <Row>
                                <Col sm="12" md={{ size: 4, offset: 4 }}><img src={require('./img/logo-jne.png')} className="img-payment" /></Col>
                            </Row>
                            <Row>
                                <Col sm="12" md={{ size: 4, offset: 4 }}><img src={require('./img/logo-jnt.PNG')} className="img-payment" /></Col>
                            </Row>
                            <Row>
                                <Col sm="12" md={{ size: 4, offset: 4 }}><img src={require('./img/logo-pos.png')} className="img-payment" /></Col>
                            </Row>
                            <Row>
                                <Col sm="12" md={{ size: 4, offset: 4 }}><img src={require('./img/logo-tiki.PNG')} className="img-payment" /></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}