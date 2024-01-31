"use client";

import React from "react";
import { Accordion, Flex } from "@mantine/core";

export const FAQ = () => {
  const groceries = [
    {
      value: "Is it free?",
      description:
        "As this is a premium tool, there is a basic fee for using it. However, you can create one resume for free and export it at no cost. If you need to create more than one resume, there will be a basic fee charged for each additional resume.",
    },
    {
      value: "How do I create a resume?",
      description:
        'You can create a resume by clicking the "Get Started" button on the homepage. It will open a new tab where you can start creating your resume.',
    },

    {
      value: "How do I customize my resume?",
      description:
        'You can customize your resume by clicking the "Get Started" button on the homepage. It will open a new tab where you can start creating your resume.',
    },
  ];

  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Flex direction={"column"} align={"center"} px={"100px"} mt={"100px"}>
      <h2>Frequently Asked Questions</h2>
      <span>Here are some of our most frequently asked questions</span>
      <Accordion
        mt={"30px"}
        style={{ width: "100%" }}
        variant="contained"
        chevronPosition="left"
        defaultValue="Apples"
      >
        {items}
      </Accordion>
    </Flex>
  );
};
