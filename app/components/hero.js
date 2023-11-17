import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Box,
  Container,
  Heading,
  Link,
  Tooltip,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

const SocialButton = ({ label, href, icon }) => {
  return (
    <Tooltip label={label}>
      <IconButton
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        icon={icon}
        size="lg"
        bg={useColorModeValue("blackAlpha.100", "gray.900")}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "gray.500"),
        }}
        isRound
      />
    </Tooltip>
  );
};

function HeroSection() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          <div style={{ height: "4vh" }}></div>
          raghav{" "}
          <Text as={"span"} color={"rgba(190,50,255,1.0)"}>
            pillai
          </Text>
        </Heading>
        <Text color={"gray.300"} maxW={"3xl"} fontSize={"xl"}>
          cto @
          <Link
            href="https://speck.chat/"
            color="rgba(200,50,200,1.0)"
            fontWeight="bold"
            isExternal
          >
            {" "}
            speck
          </Link>
          <br />i like building stuff
        </Text>
        <Stack spacing={6} direction={"row"}>
          <SocialButton
            label="GitHub"
            href="https://github.com/raghavpillai"
            icon={<FaGithub />}
          />
          <SocialButton
            label="LinkedIn"
            href="https://www.linkedin.com/company/speck-app/"
            icon={<FaLinkedin />}
          />
        </Stack>
      </Stack>
    </Container>
  );
}

export default function HeroContainer() {
  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage={"url(/test.png)"}
      backgroundSize="cover"
      backgroundPosition="center bottom"
    >
      <Box
        width={"full"}
        height={"full"}
        backdropFilter="auto"
        backdropBlur="10px"
        backdropBrightness={0.8}
      >
        <VStack
          w="full"
          justify="center"
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <HeroSection />
        </VStack>
      </Box>
    </Flex>
  );
}
