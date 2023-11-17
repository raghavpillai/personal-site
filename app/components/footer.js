"use client";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Grid,
  IconButton,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import React from "react";

const SocialButton = ({ label, href, icon }) => {
  return (
    <Tooltip label={label} hasArrow>
      <IconButton
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        icon={React.cloneElement(icon, { size: "1.25vh" })}
        size="md"
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
        isRound
      />
    </Tooltip>
  );
};

export default function Footer() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.800")}
      >
        <Container as={Stack} maxW="6xl" py={4}>
          <Text color="gray.500" textAlign={{ base: "center", md: "center" }}>
            © {new Date().getFullYear()} Pillai
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
