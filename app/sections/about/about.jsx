"use client";

import { Box } from "@chakra-ui/react";

import CompanyCards from "./company-cards";
import HackathonCards from "./hackathon-cards";
import Me from "./me";

export default function About() {
  return (
    <Box mb={10} w="full">
      <Me />
      <CompanyCards />
      <HackathonCards />
    </Box>
  );
}
