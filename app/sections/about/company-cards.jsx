"use client";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

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
    location: "Boston, MA",
    logoSrc: "/companies/anduril.png",
  },
  {
    title: "University of Texas at Dallas",
    role: "Researcher",
    duration: "Aug 2021 - Jan 2023",
    description: "Applied Systems Lab: Autonomous Vehicles",
    location: "Dallas, TX",
    logoSrc: "/companies/utd.svg",
  },
  {
    title: "Amazon",
    role: "Software Engineer Intern",
    duration: "May 2022 - Aug 2022",
    description: "Amazon Astro",
    location: "San Francisco, CA",
    logoSrc: "/companies/amazon.webp",
  },
];

const CompanyCard = ({ index, company, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={index}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: delay * 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        as={motion.div}
        width="lg"
        maxW="82vw"
        h="full"
        bg={isHovered ? "rgba(60, 60, 60, 0.3)" : "rgba(40, 40, 40, 0.3)"}
        border="1px solid rgba(100, 100, 100, 0.2)"
        whileHover={{ scale: 1.02 }}
        px={isHovered ? 2 : 0} 
        transition="padding 0.2s ease-in-out, background-color 0.2s ease-in-out"
      >
        <CardHeader>
          <HStack justify="space-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay * 0.2 + 0.3 }}
            >
              <Text fontSize="md" fontWeight="bold" mb={3}>
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
            <Text fontSize="lg" fontWeight="bold" color="gray.300">
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
            <Text fontSize="sm">
              {company.description}
            </Text>
            <HStack mt={4}>
              <Icon as={FaMapMarkerAlt} color="red.600" />
              <Text fontSize="sm" color="gray.400">{company.location}</Text>
            </HStack>
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
