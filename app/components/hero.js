import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
  Tooltip,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
          <Text as={"span"} color={"rgba(150,150,150,1.0)"}>
            pillai
          </Text>
        </Heading>
        <Text color={"gray.300"} maxW={"3xl"} fontSize={"xl"}>
          cto @
          <Link
            href="https://speck.bot/"
            color="rgba(150,150,150,1.0)"
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
            href="https://www.linkedin.com/in/raghav-pillai/"
            icon={<FaLinkedin />}
          />
          <SocialButton
            label="Twitter"
            href="https://twitter.com/rag_pil"
            icon={<FaXTwitter />}
          />
        </Stack>
      </Stack>
    </Container>
  );
}

export default function HeroContainer() {
  const [backgroundImage, setBackgroundImage] = useState("url(/static.png)");

  useEffect(() => {
    const img = new Image();
    img.src = "/animated.png";
    img.onload = () => setBackgroundImage("url(/animated.png)");
  }, []);

  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center bottom"
    >
      <Box
        width={"full"}
        height={"full"}
        backdropFilter="auto"
        backdropBlur="10px"
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
