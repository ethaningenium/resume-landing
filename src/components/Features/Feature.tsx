import { Button, Flex, Image } from "@mantine/core";
import React from "react";
import NextImage from "next/image";

type Props = {
  imageRight?: boolean;
};

export const Feature = (props: Props) => {
  return (
    <div
      className={`flex ${
        props.imageRight
          ? "md:flex-row-reverse flex-col "
          : "md:flex-row flex-col"
      } w-full gap-12 items-center`}
    >
      <NextImage
        alt="Hero Image"
        width={1000}
        height={1000}
        className="w-96 h-auto"
        src="https://assets-global.website-files.com/635c591378332f38be25d45f/65a2faf86841a21a6ff327c0_Bullet%20points-p-1080.png"
      />
      <div className="flex flex-col items-start gap-2 ">
        <span className="font-medium text-blue-500">
          ATTRACT HIRING MANAGERS AND RECRUITERS
        </span>
        <h2 className="text-3xl font-bold">
          Customize your resume with advanced AI
        </h2>
        <p className="text-gray-600">
          Struggling with drafting your resume? Crafting impactful bullet points
          can be even more challenging. That's why we've integrated a powerful
          AI that analyzes and generates bullet points to enhance your resume
          like never before. Revolutionize Your Resume with AI-Generated Bullet
          Points!
        </p>
        <Button size="lg" variant="transparent">
          Enhance my resume
        </Button>
      </div>
    </div>
  );
};
