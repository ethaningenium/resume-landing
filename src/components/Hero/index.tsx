import { Button, Flex, Image } from "@mantine/core";
import React from "react";
import style from "./style.module.css";
import NextImage from "next/image";

export const Hero = () => {
  return (
    <main className="flex flex-col container items-center gap-6 py-6">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-4xl font-bold">Your Resume, Our AI</h1>
        <p className="w-1/2 text-center text-gray-600">
          Customize your resume to each job description, get a detailed analysis
          and review, and never worry about optimizing your resume again!
        </p>
      </div>
      <Flex justify="center" align="center" direction="row" gap="xl">
        <Button size="xl">Get Started</Button>
        <Button size="xl" variant="transparent">
          Book a Free Tour
        </Button>
      </Flex>
      <NextImage
        alt="Hero Image"
        width={1000}
        height={1000}
        fetchPriority="auto"
        className="rounded-2xl"
        src="https://help.simpleviewinc.com/hc/article_attachments/4565740005907/Firebase_Project_Overview_Demo.jpg"
      />
    </main>
  );
};
