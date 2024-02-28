import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomInput from "./custom_input";

function FaqForm({ faq, setFaq }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isFormError, setIsFormError] = useState(false);

  const handleSubmit = (event) => {
    const isDataValied = question.length && answer.length;
    setIsFormError(!isDataValied);
    event.preventDefault();
    if (isDataValied) {
      setFaq([{ id: Math.random(), question, answer }, ...faq]);
      setQuestion("");
      setAnswer("");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Stack gap={5} direction="horizontal">
          <CustomInput
            label={"Question"}
            value={question}
            onChange={setQuestion}
          />
          <CustomInput label={"Answer"} value={answer} onChange={setAnswer} />
        </Stack>
        {isFormError ? (
          <p style={{ color: "red" }}>All input is required</p>
        ) : (
          <></>
        )}
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
