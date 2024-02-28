import React from "react";
import "../category.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";
import FaqItem from "./faq_item";

function FaqList({ faq }) {
  return (
    <Stack className="faq-bg" gap={4}>
      {faq.map((faqItem) => (
        <Stack gap={5} direction="horizontal" key={faqItem.id}>
          <FaqItem value={faqItem.question} />
          <FaqItem value={faqItem.answer} />
        </Stack>
      ))}
    </Stack>
  );
}

export default FaqList;
