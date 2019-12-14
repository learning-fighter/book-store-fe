import React, { Component } from "react";
import { Container, Row, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';

export default class AddUser extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="7">
                            <h1 className="page-title">Add User</h1>
                            <Form>
                                <FormGroup>
                                    <Label>Full Name</Label>
                                    <Input required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type="email" required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Username</Label>
                                    <Input required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type="password" required />
                                </FormGroup>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}