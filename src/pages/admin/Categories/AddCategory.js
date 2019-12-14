import React, { useState } from "react";
import { Container, Row, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const AddCategory = props => {
    const [category, setCategory] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const request = await axios.post('http://localhost:8000/category', {
            categoryName: category 
        })
        console.log(request)
        props.history.push('/categories')
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md="7">
                        <h1 className="page-title">Add Category</h1>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Category Name</Label>
                                <Input required 
                                    type="text"
                                    placeholder="Category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(AddCategory)