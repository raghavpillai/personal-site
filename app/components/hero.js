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
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MotionFlex = motion(Flex);
const MotionIconButton = motion(IconButton);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const SocialButton = ({ label, href, icon }) => {
  return (
    <Tooltip label={label}>
      <MotionIconButton
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </Tooltip>
  );
};

function HeroSection() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        as={MotionFlex}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MotionHeading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div style={{ height: "4vh" }}></div>
          raghav{" "}
          <MotionText
            as={"span"}
            color={"rgba(150,150,150,1.0)"}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            pillai
          </MotionText>
        </MotionHeading>
        <MotionText
          color={"gray.300"}
          maxW={"3xl"}
          fontSize={"xl"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
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
        </MotionText>
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
    <MotionFlex
      w="full"
      h="100vh"
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center bottom"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <MotionBox
        width={"full"}
        height={"full"}
        backdropFilter="auto"
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(10px)" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <VStack
          w="full"
          justify="center"
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <HeroSection />
        </VStack>
      </MotionBox>
    </MotionFlex>
  );
}
