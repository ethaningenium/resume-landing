import { Flex } from "@mantine/core";
import { Fingerprint } from "lucide-react";
import React from "react";

export const Card = () => {
  return (
    <Flex direction={"column"} align="center" gap="10px">
      <Fingerprint size={50} color="#0092FF" />
      <h3 style={{ fontSize: "18px", lineHeight: 1.5, margin: 0 }}>
        Unlimited Resumes
      </h3>
      <p
        style={{
          width: "300px",
          textAlign: "center",
          fontSize: "12px",
          color: "gray",
          lineHeight: 1.5,
        }}
      >
        Craft as many resumes as you need, tailor-made for each job application.
        No limits, just endless opportunities to land your dream role.
      </p>
    </Flex>
  );
};
