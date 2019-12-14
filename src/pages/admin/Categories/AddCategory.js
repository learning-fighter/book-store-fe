import React, { Component } from "react";
import { Container, Row, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';

export default class AddCategory extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="7">
                            <h1 className="page-title">Add Category</h1>
                            <Form>
                                <FormGroup>
                                    <Label>Category Name</Label>
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