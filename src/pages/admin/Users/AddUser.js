import React, { useState } from "react";
import { Container, Row, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const AddUser = props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        const request = await axios.post('http://localhost:8000/users', {
            name : name,
            email : email,
            password : password
        })
        props.history.push('/users')
    }
    return(
        <div>
            <Container>
                <Row>
                    <Col md="7">
                        <h1 className="page-title">Add User</h1>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Full Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Full Name"
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
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(AddUser)