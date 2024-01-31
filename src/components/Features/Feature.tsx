import { Button, Flex, Image } from "@mantine/core";
import React from "react";
import NextImage from "next/image";

type Props = {
  imageRight?: boolean;
};

export const Feature = (props: Props) => {
  return (
    <Flex
      direction={props.imageRight ? "row-reverse" : "row"}
      align="center"
      gap="lg"
      justify={"center"}
    >
      <Image
        alt="Hero Image"
        component={NextImage}
        width={1000}
        height={400}
        w={400}
        fit="contain"
        radius="md"
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        src="https://assets-global.website-files.com/635c591378332f38be25d45f/65a2faf86841a21a6ff327c0_Bullet%20points-p-1080.png"
      />
      <Flex direction={"column"} align="start">
        <span>ATTRACT HIRING MANAGERS AND RECRUITERS</span>
        <h2>Customize your resume with advanced AI</h2>
        <p style={{ width: "500px" }}>
          Struggling with drafting your resume? Crafting impactful bullet points
          can be even more challenging. That's why we've integrated a powerful
          AI that analyzes and generates bullet points to enhance your resume
          like never before. Revolutionize Your Resume with AI-Generated Bullet
          Points!
        </p>
        <Button size="lg" variant="transparent">
          Enhance my resume
        </Button>
      </Flex>
    </Flex>
  );
};
