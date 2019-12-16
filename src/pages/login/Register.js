import React, { useState } from "react";
import { Container, Row, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'

const Register = props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const request = await axios.post('http://localhost:8000/users', {
            name: name,
            email: email,
            password: password
        })
        props.history.push('/login')
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col className="div-margin-top">
                        <Form onSubmit={handleSubmit} className="div-form">
                            <h3>Sign Up</h3>
                                <FormGroup>
                                    <Label>Full Name</Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input
                                        type="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                </FormGroup>
                                <Button type="submit">Sign Up</Button>
                            <p className="forgot-password text-right">
                                Already registered <Link to="/login">sign in?</Link>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(Register)