"use client";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Logo = ({ src, alt }) => {
  return (
    <Link href="/" _hover={{ textDecoration: "none" }}>
      <Image src={src} alt={alt} boxSize={10} opacity={0.9} />
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
    role: "Software Engineer Intern",
    duration: "May 2022 - Aug 2022",
    description: "Amazon Astro",
    logoSrc: "/companies/amazon.webp",
  },
];

const CompanyCard = ({ index, company, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      key={index}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: delay * 0.3 }}
    >
      <Card
        as={motion.div}
        width={{ base: "lg", md: "md" }}
        h="full"
        bg={"rgba(40, 40, 40, 0.3)"}
        border={"1px solid rgba(100, 100, 100, 0.2)"}
        whileHover={{ scale: 1.02 }}
      >
        <CardHeader>
          <HStack justify="space-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay * 0.2 + 0.3 }}
            >
              <Text fontSize={"md"} fontWeight="bold" mb={3}>
                {company.title}
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay * 0.2 + 0.4 }}
            >
              <Logo src={company.logoSrc} alt={company.title} />
            </motion.div>
          </HStack>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay * 0.2 + 0.5 }}
          >
            <Text fontSize={"lg"} fontWeight="bold" color="gray.300">
              {company.role}
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay * 0.2 + 0.6 }}
          >
            <Text
              pt="2"
              fontSize="lg"
              textAlign="right"
              color="rgb(175, 175, 175)"
            >
              {company.duration}
            </Text>
          </motion.div>
        </CardHeader>
        <CardBody>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay * 0.2 + 0.7 }}
          >
            <Text pt="2" fontSize="sm">
              {company.description}
            </Text>
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default function CompanyCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box
      ref={ref}
      w="90%"
      mx="auto"
      zIndex={10}
      p={{ base: 4, md: 10 }}
      mb={20}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Text
          color="white"
          mb={5}
          fontSize="5xl"
          textAlign="center"
          fontWeight="bold"
        >
          previously @
        </Text>
      </motion.div>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        align="center"
        wrap="wrap"
      >
        {cardData.map((card, index) => (
          <CompanyCard key={index} company={card} delay={index} />
        ))}
      </Stack>
    </Box>
  );
}
