import { Flex } from "@mantine/core";
import { Radius } from "lucide-react";
import React from "react";
import { Feature } from "./Feature";

export const Features = () => {
  return (
    <div className="flex flex-col container bg-slate-100 mt-16 p-12 gap-16 items-center rounded-3xl">
      <h2 className="text-3xl font-bold">Features and Benefits</h2>
      <div className="flex w-full flex-col gap-12">
        <Feature />
        <Feature imageRight />
        <Feature />
      </div>
    </div>
  );
};
