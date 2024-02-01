import { Button, Flex } from "@mantine/core";
import React from "react";
import { Label } from "./Label";

export const Trusted = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold text-center">
          Trusted by users at these companies
        </h2>
        <span className="text-gray-600 text-center">
          And many more from top startups, universities, and institutions!
        </span>
      </div>
      <div className="flex flex-wrap gap-4 max-w-2xl justify-center">
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
      </div>
      <div className="flex pl-4 bg-gray-100 rounded-2xl gap-4 items-center">
        <span>What are you waiting for?</span>
        <Button color="blue" variant="transparent">
          Build resume
        </Button>
      </div>
    </div>
  );
};
