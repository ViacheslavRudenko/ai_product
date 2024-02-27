import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomInput from "./custom_input";

function FaqForm({}) {
  const handleSubmit = (event) => {};
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={5} direction="horizontal" className="col-8">
        <CustomInput label={"Question"} value={""} onChange={() => {}} />
        <CustomInput label={"Answer"} value={""} onChange={() => {}} />
      </Stack>
    </Form>
  );
}

export default FaqForm;
