import { Button, Flex, Group } from "@mantine/core";
import React from "react";

export const Header = () => {
  return (
    <Flex justify="space-evenly" align="center" direction="row" gap="xl">
      <h1>Leadify</h1>
      <Group gap="lg" justify="space-around">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </Group>
      <Button>Get Started</Button>
    </Flex>
  );
};
