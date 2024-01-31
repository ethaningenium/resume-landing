import { Flex } from "@mantine/core";
import React from "react";

import { Card } from "./Card";

export const WhyMe = () => {
  return (
    <Flex direction={"column"} align="center" gap="lg">
      <h2>Included with Careerflow Premium</h2>
      <Flex direction={"row"} align="center" gap="150px">
        <Card />
        <Card />
        <Card />
      </Flex>
    </Flex>
  );
};
