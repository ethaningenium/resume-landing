import { Flex } from "@mantine/core";
import React from "react";

import { Card } from "./Card";

export const WhyMe = () => {
  return (
    <div className="flex flex-col items-center container gap-16 p-6">
      <h2 className="text-3xl font-bold">Included with Careerflow Premium</h2>
      <div className="flex w-full items-start justify-around flex-wrap gap-16">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
