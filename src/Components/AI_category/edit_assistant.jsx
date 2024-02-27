import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/header'

function Edit_assistant({ assistant_id, user_id, AssistantName, AssistantInstruction }) {
    const [AssistantName, setAssistantName] = useState('');
    const [AssistantInstruction, setAssistantInstruction] = useState('');

    return (
        <div>
            <Header />

            <Container>
                <h1>Create a new category</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formCategoryName">
                        <Form.Label column sm={2}>
                            Enter category Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Enter category name"
                                value={AssistantName}
                                onChange={(e) => setAssistantName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formCategoryInfo">
                        <Form.Label column sm={2}>
                            Category information
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter info"
                                value={AssistantInstruction}
                                onChange={(e) => setAssistantInstruction(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="secondary" type="button">
                            Cancel
                        </Button>{' '}
                        <Button variant="primary" type="submit">
                            Next
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Edit_assistant