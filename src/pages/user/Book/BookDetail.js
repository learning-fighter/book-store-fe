import React, { Component } from "react";
import { Container, Row, Col, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Books.css'

export default class BookDetail extends Component {
    render() {
        return (
            <div className="content">
                <Container className="cart-content">
                    <Row>
                        <Col md="3">
                            <img src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" className="detail-cover" />
                        </Col>
                        <Col md="9">
                            <table>
                                <tr>
                                    <td colSpan="2">
                                        <h2>Tumbuh dari Luka </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <h4><Badge color="warning">Rp. 90.000</Badge></h4>
                                    </td>
                                </tr>
                                <tr>
                                    <th width="120px">Author</th>
                                    <td>Indra Sugiarto</td>
                                </tr>
                                <tr>
                                    <th>Category</th>
                                    <td>Psikologi</td>
                                </tr>
                                <tr>
                                    <th>Pages</th>
                                    <td>455</td>
                                </tr>
                                <tr>
                                    <th>Synopsis</th>
                                    <td className="detail-synopsis">
                                        Belajar banyak dari pengalaman berdagang sejak kecil hingga kuliah, dan
                                        pengalamannya mengajar les dan asisten praktikum di kampus akhirnya Kak
                                        Ugi (panggilan akrabnya) membuka bimbingan belajar Katalis Education
                                        (@kataliseducation). Dari modal memenangkan lomba business plan di
                                        kampus-nya. Dari Katalis inilah, selain mengajar les kimia, Indra Sugiarto
                                        sering bertemu langsung dengan adik-adik SMA yang akan berkuliah.
                                        Mendengarkan kendala yang harus mereka hadapi secara personal, selama
                                        bertahun-tahun membuatnya sadar bahwa ada yang anak SMA butuhkan selain
                                        akademik, tapi juga teman berjuang yang mengerti apa yang mereka rasakan.
                                        Maka dibuatlah @masukkampus sejak tahun 2016. Setiap kota yang didatangi
                                        selalu full house dihadiri ribuan anak SMA yang ingin mendengar langsung
                                        motivasi dari Indra Sugiarto.
                                    </td>
                                </tr>
                                <tr>
                                    <th>Stock</th>
                                    <td>45</td>
                                </tr>
                            </table><br/>
                            <Button color="success" size="sm"><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}