import {
  Box,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { useRef, useState } from "react";

const MotionBox = motion(Box);

const HackathonCard = ({ index, hackathon }) => {
  const cardRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = -(e.clientX - rect.left - rect.width / 2) / 10; // Reduced divisor for stronger perspective
    const y = -(e.clientY - rect.top - rect.height / 2) / 10; // Reduced divisor for stronger perspective
    cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    setIsMouseEntered(false);
    cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MotionBox
      ref={cardRef}
      key={index}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={"gray.800"}
      style={{ perspective: 1500 }} // Increased perspective value for a more pronounced effect
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 1 }}
      initial={{ transform: "rotateY(0deg) rotateX(0deg)" }}
    >
      <Image
        src={hackathon.src}
        alt={hackathon.name}
        w="full"
        height="200px"
        fit="cover"
        objectPosition="center"
        borderTopRadius={"lg"}
      />
      <Box w="full" h="5px" bg="rgba(40, 40, 40, 0.5)"></Box>
      <Box
        p={4}
        w="full"
        bgGradient={`linear(to-b, rgba(40, 40, 40, 0.5), rgba(10, 10, 10, 0))`}
        borderBottomRadius={"lg"}
      >
        <HStack justifyContent="space-between">
          <HStack>
            <IconButton
              icon={<FaGithub />}
              as="a"
              href={hackathon.link}
              target="_blank"
              rounded={"full"}
              size="sm"
              colorScheme={"gray"}
            />
            <Text fontSize={"lg"} fontWeight="900">
              {hackathon.name}
            </Text>
          </HStack>
          <Text fontSize={"lg"} color="gray.400">
            {hackathon.hackathon}
          </Text>
        </HStack>

        <Text w="full" mt={4} color="gray.300">
          {hackathon.description}
        </Text>
      </Box>
    </MotionBox>
  );
};
const HackathonCards = () => {
  const hackathons = [
    {
      hackathon: "HackHarvard 2023",
      name: "MindTune",
      description:
        "Detecting early signs of Alzheimer's with Eye-Tracking & Cognitive Tests.",
      src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/633/207/datas/gallery.jpg",
      link: "https://github.com/raghavpillai/MindTune",
    },
    {
      hackathon: "CalHacks 2023",
      name: "SecondSearch",
      description:
        "Instantly search large lecture series with optimized vector similarity search to answer your questions.",
      src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/646/084/datas/gallery.jpg",
      link: "https://github.com/KanishkGar/calhacks",
    },
    {
      hackathon: "HackUTD X",
      name: "Gold Mine",
      description:
        "Crawling the web and financial data to accurately predict company performance.",
      src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/659/761/datas/gallery.jpg",
      link: "https://github.com/NikhilNarvekar123/hackutdgoldman",
    },

    {
      hackathon: "HackRice 13",
      name: "Swift Rescue",
      description:
        "97% accurate flood prediction, climate news, optimized routes, and real-time maps connecting users and responders.",
      src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/599/133/datas/gallery.jpg",
      link: "https://github.com/NikhilNarvekar123/SwiftRescue",
    },
    {
      hackathon: "HackSMU V",
      name: "InvestIQ",
      description:
        "Analyzing the best stocks to trade using daily sentiment analysis across the Internet. Built on a decentralized Cartesi & GCP-based platform.",
      src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/595/769/datas/gallery.jpg",
      link: "https://github.com/raghavpillai/InvestIQ",
    },

    {
      hackathon: "TAMUHack 2023",
      name: "AAssistant",
      description:
        "A pair of customer and employee applications that streamlines the travel experience by allowing for intuitive and easy access to core airline data.",
      src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/363/502/datas/gallery.jpg",
      link: "https://github.com/raghavpillai/AAssistant",
    },
    {
      hackathon: "HackTX 2022",
      name: "SimpliFarm",
      description:
        "Simplifying food production by optimizing farming operations using machine learning. Calculate minimum farming needs and track resource utilization.",
      src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/257/479/datas/gallery.jpg",
      link: "https://github.com/raghavpillai/Simplifarm",
    },
    {
      hackathon: "HackUTD VIII",
      name: "HypeInvest",
      description:
        "Use social media data to predict stock performance and provide users with public sentiment data and statistics about the stock in question.",
      src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/633/207/datas/gallery.jpg",
      link: "https://github.com/raghavpillai/HypeInvest",
    },
  ];

  return (
    <SimpleGrid minChildWidth="300px" spacing="40px" p={8}>
      {[...hackathons].map((hackathon, index) => (
        <HackathonCard key={index} hackathon={hackathon} />
      ))}
    </SimpleGrid>
  );
};

export default HackathonCards;
