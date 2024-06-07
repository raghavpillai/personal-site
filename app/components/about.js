"use client";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import HackathonCards from "./hackathon-cards";

const Logo = ({ src, invert, alt }) => {
  return (
    <Link href="/" _hover={{ textDecoration: "none" }}>
      <Image
        src={src}
        filter={invert ? "invert(1)" : "none"}
        alt={alt}
        boxSize={10}
        opacity={0.9}
      />
    </Link>
  );
};

const cardData = [
  {
    title: "Anduril",
    role: "Software Engineer Intern",
    duration: "May 2023 - Sept 2023",
    description: "Anduril Imaging",
    logoSrc: "/companies/anduril.png",
    invert: true,
  },
  {
    title: "University of Texas at Dallas",
    role: "Researcher",
    duration: "Aug 2021 - Jan 2023",
    description: "Applied Systems Lab: Autonomous Vehicles",
    logoSrc: "/companies/utd.svg",
  },
  {
    title: "Amazon",
    role: "Software Development Engineer Intern",
    duration: "May 2022 - Aug 2022",
    description: "Amazon Astro",
    logoSrc: "/companies/amazon2.webp",
  },
];

const CompanyCard = ({ index, company }) => {
  return (
    <Card
      as={motion.div}
      key={index}
      width={{ base: "full", md: "sm" }}
      minH={"3xs"}
      maxH={"3xs"}
      bg={"rgba(40, 40, 40, 0.3)"}
      border={"1px solid rgba(100, 100, 100, 0.2)"}
      whileHover={{ scale: 1.02 }}
    >
      <CardHeader>
        <HStack justify="space-between">
          <Heading size="md" marginBottom={3}>
            {company.title}
          </Heading>
          <Logo
            src={company.logoSrc}
            invert={company.invert}
            alt={company.title}
          />
        </HStack>
        <Heading size="sm" fontWeight="semibold" color="gray.400">
          {company.role}
        </Heading>
        <Text pt="2" fontSize="sm" textAlign="right" color="rgb(175, 175, 175)">
          {company.duration}
        </Text>
      </CardHeader>
      <CardBody>
        <Text pt="2" fontSize="sm">
          {company.description}
        </Text>
      </CardBody>
    </Card>
  );
};

export default function About() {
  return (
    <Box position={"relative"}>
      <Container zIndex={10} p={10} position={"relative"}>
        <Heading color={"white"} mb={5} fontSize={"5xl"} textAlign={"center"}>
          me
        </Heading>
        <Card
          bg={"rgba(40, 40, 40, 0.3)"}
          border={"1px solid rgba(100, 100, 100, 0.2)"}
        >
          <CardBody>
            <Flex justifyContent="center" alignItems="center">
              <Image
                src="/raghav2.png"
                alt="Raghav Pillai"
                boxSize={150}
                borderRadius={"full"}
                marginBottom={5}
              />
            </Flex>
            <Text textAlign={"center"} minW={10} maxW={"75w"}>
              currently cto @ speck, building the next generation of web
              automations. the best ai assistant that automates your web
              workflows.
            </Text>
          </CardBody>
        </Card>
      </Container>

      <Container
        maxW={"7xl"}
        zIndex={10}
        p={{ base: 4, md: 10 }}
        position={"relative"}
      >
        <Heading color={"white"} mb={5} fontSize={"5xl"} textAlign={"center"}>
          previously @
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          align="center"
          wrap="wrap"
        >
          {cardData.map((card, index) => (
            <CompanyCard key={index} company={card} />
          ))}
        </Stack>
      </Container>
      <Heading
        color={"white"}
        mt={10}
        mb={2}
        fontSize={"5xl"}
        textAlign={"center"}
      >
        hackathon dubs
      </Heading>
      <HackathonCards />
    </Box>
  );
}
