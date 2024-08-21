"use client";
import {
  Box,
  IconButton,
  Text,
  Tooltip,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
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
    <Box
      color={"gray.200"}
      h="100px"
      borderTopWidth={1}
      borderStyle="solid"
      borderColor={"gray.800"}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      paddingLeft={8}
    >
      <VStack
        spacing={2}
        alignItems="flex-start"
        justifyContent="center"
        h="full"
      >
        <Text color="gray.500">Made with ❤️ in</Text>
        <Text color="gray.500">San Francisco</Text>
      </VStack>
    </Box>
  );
}
