import { Button, Flex } from "@mantine/core";
import React from "react";
import { Label } from "./Label";

export const Trusted = () => {
  return (
    <Flex direction={"column"} align="center" gap="lg">
      <h2>Trusted by users at these companies</h2>
      <span>
        And many more from top startups, universities, and institutions!
      </span>
      <Flex
        direction={"row"}
        align="center"
        justify="center"
        gap="lg"
        wrap={"wrap"}
        style={{ maxWidth: "800px" }}
      >
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
      </Flex>
      <Flex direction={"row"} align="center" mt={"30px"}>
        <span>What are you waiting for?</span>
        <Button color="blue" variant="transparent">
          Build resume
        </Button>
      </Flex>
    </Flex>
  );
};
