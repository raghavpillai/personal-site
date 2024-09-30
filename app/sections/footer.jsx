"use client";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMapPin } from "react-icons/fa";

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
    <Box
      color={"gray.200"}
      h="75px"
      borderTopWidth={1}
      borderStyle="solid"
      borderColor={"gray.800"}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      paddingLeft={8}
    >
      <HStack spacing={2} alignItems="center" justifyContent="center" h="full">
        <Icon as={FaMapPin} color="red.300" />
        <Text color="gray.300">San Francisco</Text>
      </HStack>
    </Box>
  );
}
