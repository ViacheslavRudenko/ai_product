import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/header";
import FaqForm from "./create_faq";
import FaqList from "./faq/faq_list";
import { useNavigate } from "react-router-dom";

function CategoryForm() {
  const [AssistantName, setAssistantName] = useState("");
  const [AssistantInstruction, setAssistantInstruction] = useState("");
  const [faq, setFaq] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // https://ttestt.shop/api/assistants/getAll?user_id=7
    // https://ttestt.shop/api/assistants/create

    fetch("https://ttestt.shop/api/assistants/edit", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // name: AssistantName,
        // instructions: AssistantInstruction,
        // user_id: "8"
        id: "5",
        //instructions: "1234",
        name: "1234",
      }),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const categoryData = {
      id: Math.random(),
      AssistantName,
      AssistantInstruction,
      faq,
    };

    console.log(categoryData);
    navigate("/categories");
  };

  return (
    <>
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
            <Button
              variant="secondary"
              type="button"
              onClick={() => {
                navigate("/categories");
              }}
            >
              Cancel
            </Button>{" "}
            <Button variant="primary" type="submit">
              Next
            </Button>
          </div>
        </Form>
        <Stack style={{ paddingTop: 50, maxWidth: 600 }} gap={4}>
          <FaqForm faq={faq} setFaq={setFaq} />
          {faq.length ? <FaqList faq={faq} /> : <></>}
        </Stack>
      </Container>
    </>
  );
}

export default CategoryForm;
