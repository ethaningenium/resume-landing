import { Button, Flex, Image } from "@mantine/core";
import React from "react";
import style from "./style.module.css";
import NextImage from "next/image";

export const Hero = () => {
  return (
    <main className={style.hero}>
      <Flex justify="center" align="center" direction="column">
        <h1>Your Resume, Our AI</h1>
        <p className={style.text}>
          Customize your resume to each job description, get a detailed analysis
          and review, and never worry about optimizing your resume again!
        </p>
        <Flex
          justify="center"
          align="center"
          direction="row"
          gap="xl"
          mt={"xl"}
        >
          <Button size="xl">Get Started</Button>
          <Button size="xl" variant="transparent">
            Book a Free Tour
          </Button>
        </Flex>
        <Image
          mt={"xl"}
          alt="Hero Image"
          component={NextImage}
          width={1000}
          height={1000}
          w={1000}
          fit="contain"
          radius="md"
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          src="https://help.simpleviewinc.com/hc/article_attachments/4565740005907/Firebase_Project_Overview_Demo.jpg"
        />
      </Flex>
    </main>
  );
};
