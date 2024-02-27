import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form } from "react-bootstrap";

function CustomInput({ label, placeholder, value, onChange }) {
  return (
    <Form.Group as={Col} className="mb-3" controlId="formCategoryName">
      <Form.Label column sm={2}>
        {label}
      </Form.Label>
      <Col>
        <Form.Control
          type="text"
          placeholder={placeholder ?? placeholder}
          style={{ height: "50px" }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Col>
    </Form.Group>
  );
}

export default CustomInput;
