import { Button, Flex, Group } from "@mantine/core";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between container py-6">
      <span className="text-3xl font-bold">Leadify</span>
      <div className="flex gap-16 list-none">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </div>
      <Button>Get Started</Button>
    </header>
  );
};
