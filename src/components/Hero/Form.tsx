import { Button, Card, Flex, Input } from "@mantine/core";
import React from "react";

export const Form = () => {
  return (
    <Card radius="lg" p="md" shadow="md" mt="xl">
      <Flex direction={"column"}>
        <h2>Get Early Access</h2>
        <span>Join the waitlist, refer your friends for faster access!</span>
      </Flex>
      <Input size="md" radius="md" placeholder="Full name" mt={"md"} />
      <Input size="md" radius="md" placeholder="Your email" mt={"md"} />
      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
};
