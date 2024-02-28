import React from "react";
import "../category.css";
import "bootstrap/dist/css/bootstrap.min.css";

function FaqItem({ value }) {
  return <div class="border border-2 py-2 px-3 w-100">{value}</div>;
}

export default FaqItem;
