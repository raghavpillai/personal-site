import {
  Box,
  Flex,
  HStack,
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
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MotionFlex = motion(Flex);
const MotionIconButton = motion(IconButton);
const MotionText = motion(Text);
const MotionHStack = motion(HStack);
const MotionVStack = motion(VStack);
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
    <VStack align={"center"} justify={"center"} minHeight="100vh">
      <MotionText
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.2 }}
      >
        Hi, I'm
      </MotionText>
      <HStack spacing={6} mb={4}>
        <MotionText
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight="110%"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          fontWeight="bold"
        >
          raghav
        </MotionText>
        <MotionText
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight="110%"
          as="span"
          color={"rgba(150,150,150,1.0)"}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          fontWeight="bold"
        >
          pillai
        </MotionText>
      </HStack>
      <VStack spacing={4} align="center">
        <MotionText
          color={"gray.300"}
          fontSize={"xl"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          cto @{" "}
          <Link
            href="https://speck.sh/"
            color="rgba(50,100,200,1)"
            fontWeight="bold"
            isExternal
          >
            speck
          </Link>
        </MotionText>
        <MotionText
          color={"gray.300"}
          fontSize={"xl"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
          mb={12}
        >
          i like building stuff
        </MotionText>
      </VStack>

      <Stack spacing={6} direction={"row"}>
        {[
          {
            label: "Twitter/𝕏..?",
            href: "https://twitter.com/rag_pil",
            icon: <FaXTwitter />,
          },
          {
            label: "GitHub",
            href: "https://github.com/raghavpillai",
            icon: <FaGithub />,
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/raghav-pillai/",
            icon: <FaLinkedin />,
          },
        ].map((social, index) => (
          <MotionBox
            key={social.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 + index * 0.2, duration: 0.5 }}
          >
            <SocialButton
              label={social.label}
              href={social.href}
              icon={social.icon}
            />
          </MotionBox>
        ))}
      </Stack>
    </VStack>
  );
}

export default function HeroContainer() {
  return (
    <MotionFlex
      w="full"
      h="100vh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      mb={10}
      position="relative"
    >
      <Box width={"full"} height={"full"} backdropFilter="blur(10px)">
        <VStack
          w="full"
          justify="center"
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <HeroSection />
        </VStack>
      </Box>

      <MotionBox
        position="absolute"
        bottom="10vh"
        left="50%"
        transform="translateX(-50%)"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0, 1, 0.5], y: 0 }}
        transition={{
          opacity: {
            times: [0, 0.5, 1],
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          },
          y: {
            duration: 0.5,
          },
        }}
      >
        <FaChevronDown size={30} color="gray.500" />
      </MotionBox>
    </MotionFlex>
  );
}
