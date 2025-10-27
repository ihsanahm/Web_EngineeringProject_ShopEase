import React, { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is ShopEase?",
      answer:
        "ShopEase is an online shopping platform where you can buy fashion, electronics, and accessories at the best prices.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by visiting the 'My Orders' section after logging in. You’ll find order details and shipping updates there.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Credit/Debit Cards, JazzCash, Easypaisa, and Cash on Delivery (COD).",
    },
    {
      question: "How do I return or exchange an item?",
      answer:
        "You can initiate a return or exchange by visiting the 'Returns' section within 7 days of delivery. Ensure the product is unused and in original packaging.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we deliver all across Pakistan. International shipping is coming soon!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return React.createElement(
    "div",
    {
      style: {
        marginTop: "100px",
        padding: "20px",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      },
    },
    React.createElement("h2", { style: { textAlign: "center", marginBottom: "30px" } }, "Frequently Asked Questions"),

    ...faqs.map((faq, index) =>
      React.createElement(
        "div",
        {
          key: index,
          style: {
            borderBottom: "1px solid #ddd",
            padding: "15px 0",
            cursor: "pointer",
          },
          onClick: () => toggleFAQ(index),
        },
        React.createElement(
          "h4",
          {
            style: {
              color: "#222",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          },
          faq.question,
          React.createElement("span", { style: { fontSize: "18px" } }, activeIndex === index ? "−" : "+")
        ),
        activeIndex === index
          ? React.createElement(
              "p",
              {
                style: {
                  marginTop: "10px",
                  color: "#555",
                  fontSize: "15px",
                  lineHeight: "1.6",
                },
              },
              faq.answer
            )
          : null
      )
    )
  );
}

export default FAQ;
