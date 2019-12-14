import React, { Component } from "react";
import { Container, Row, Col, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { withRouter} from 'react-router-dom'
import axios from "axios"
import './Books.css'

class BookDetail extends Component {
    state = { data: null }
    async componentWillMount() {
        const id = this.props.match.params.id
        const request = await axios.get(`http://localhost:8000/book/${id}`)
        this.setState({ data: request.data })
    }
    render() {
        const { data } = this.state
        console.log(data)
        return (
            <div className="content">
                <Container className="cart-content">
                    {!data && (
                        <h2>Loading ...</h2>
                    )}
                        {data &&  (
                            <Row>
                                <Col md="3">
                                    <img src="https://ssvr.bukukita.com/babacms/displaybuku/113314_f.jpg" className="detail-cover" />
                                </Col>
                                <Col md="9">
                                    <table>
                                        <tr>
                                            <td colSpan="2">
                                                <h2>{data.title} </h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <h4><Badge color="warning">Rp. {data.price}</Badge></h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th width="120px">Author</th>
                                            <td>{data.author}</td>
                                        </tr>
                                        <tr>
                                            <th>Category</th>
                                            <td>{data.category.categoryName}</td>
                                        </tr>
                                        <tr>
                                            <th>Pages</th>
                                            <td>{data.pages}</td>
                                        </tr>
                                        <tr>
                                            <th>Synopsis</th>
                                            <td className="detail-synopsis">{data.synopsis}</td>
                                        </tr>
                                        <tr>
                                            <th>Stock</th>
                                            <td>{data.stock}</td>
                                        </tr>
                                    </table><br/>
                                    <Button color="success" size="sm"><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</Button>
                                </Col>
                            </Row>
                        )}
                </Container>
            </div>
        );
    }
}

export default withRouter(BookDetail)