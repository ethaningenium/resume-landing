import { Flex } from "@mantine/core";
import { Radius } from "lucide-react";
import React from "react";
import { Feature } from "./Feature";

export const Features = () => {
  return (
    <Flex
      direction={"column"}
      align="center"
      bg={"#EBF4FF"}
      style={{ borderRadius: "100px" }}
    >
      <h2>Features and Benefits</h2>
      <Flex direction={"column"} align="center" gap="50px" mt={"lg"}>
        <Feature />
        <Feature imageRight />
        <Feature />
      </Flex>
    </Flex>
  );
};
