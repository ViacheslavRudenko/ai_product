import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomInput from "./custom_input";

function FaqForm({}) {
  const [QuestionValue, setQuestionValue] = useState("");
  const [AnswerValue, setAnswerValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(QuestionValue, AnswerValue);
  };
  return (
    <div style={{ paddingTop: 50, maxWidth: 600 }}>
      <Form onSubmit={handleSubmit}>
        <Stack gap={5} direction="horizontal">
          <CustomInput
            label={"Question"}
            value={QuestionValue}
            onChange={setQuestionValue}
          />
          <CustomInput
            label={"Answer"}
            value={AnswerValue}
            onChange={setAnswerValue}
          />
        </Stack>
        <div className="text-end">
          <Button
            variant="secondary"
            type="submit"
            className="col-2 rounded-0 py-0"
          >
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FaqForm;
