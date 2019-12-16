import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const AddBooks = props => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')
    const [pages, setPages] = useState('')
    const [stock, setStcok] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [categories, setCategories] = useState('')
    const [category, setCategory] = useState('')

    async function fetchData() {
        const request = await axios.get('http://localhost:8000/category')
        const data = request.data
        setCategories(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const request = await axios.post('http://localhost:8000/book', {
            title: title,
            author: author,
            price: price,
            pages: pages,
            stock: stock,
            synopsis: synopsis,
            category: category
        })
        // console.log(request)
        props.history.push('/bookList')
    }
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="7">
                            <h1 className="page-title">Add Book</h1>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label>Book Title</Label>
                                    <Input required 
                                         type="text"
                                         placeholder="Title"
                                         value={title}
                                         onChange={(e) => setTitle(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Category</Label>
                                    <Input type="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        {categories && categories.map((categories, key) => (
                                            <option value={categories._id}>{categories.categoryName}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Author</Label>
                                    <Input required 
                                        type="text"
                                        placeholder="author"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Description</Label>
                                    <Input type="textarea" name="text" id="exampleText" required 
                                        value={synopsis}
                                        onChange={(e) => setSynopsis(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="small-form">
                                    <Label>Pages</Label>
                                    <Input required 
                                        type="text"
                                        placeholder="pages"
                                        value={pages}
                                        onChange={(e) => setPages(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="small-form">
                                    <Label>Price</Label>
                                    <Input required 
                                         type="text"
                                         placeholder="price"
                                         value={price}
                                         onChange={(e) => setPrice(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="small-form">
                                    <Label>Stock</Label>
                                    <Input required 
                                         type="text"
                                         placeholder="stock"
                                         value={stock}
                                         onChange={(e) => setStcok(e.target.value)}
                                    />
                                </FormGroup>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

export default withRouter(AddBooks)