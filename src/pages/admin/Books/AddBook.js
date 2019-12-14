import React, { Component } from "react";
import { Container, Row, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';

export default class BookList extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="7">
                            <h1 className="page-title">Add Book</h1>
                            <Form>
                                <FormGroup>
                                    <Label>Book Title</Label>
                                    <Input required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Category</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Author</Label>
                                    <Input required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Synopsis</Label>
                                    <Input type="textarea" name="text" id="exampleText" required />
                                </FormGroup>
                                <FormGroup className="small-form">
                                    <Label>Pages</Label>
                                    <Input required />
                                </FormGroup>
                                <FormGroup className="small-form">
                                    <Label>Price</Label>
                                    <Input required />
                                </FormGroup>
                                <FormGroup className="small-form">
                                    <Label>Stock</Label>
                                    <Input required />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}