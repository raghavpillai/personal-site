import {
  Box,
  Card,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

const MotionVStack = motion(VStack);
const MotionSimpleGrid = motion(SimpleGrid);

const HackathonCard = ({ index, hackathon }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.4 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      as={motion.div}
      key={index}
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={"gray.800"}
      bg="rgba(40, 40, 40, 0.3)"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      size="lg"
    >
      <MotionVStack
        w="full"
        h="full"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1 }}
      >
        <Box
          w="full"
          height="200px"
          borderTopRadius="lg"
          sx={{
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
          }}
        >
          <Box
            className="image_preview"
            w="full"
            height="100%"
            backgroundImage={`url(${hackathon.src})`}
            backgroundSize="cover"
            backgroundPosition="center"
          />
        </Box>
        <Box p={4} w="full" borderBottomRadius={"lg"}>
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
      </MotionVStack>
    </Card>
  );
};
const HackathonCards = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

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
    <MotionSimpleGrid
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Text
        color="white"
        mt={10}
        mb={2}
        fontSize="5xl"
        textAlign="center"
        fontWeight="bold"
      >
        hackathon dubs
      </Text>
      <SimpleGrid
        minChildWidth="300px"
        spacing="40px"
        p={8}
        justifyItems="center"
      >
        {[...hackathons].map((hackathon, index) => (
          <HackathonCard key={index} index={index} hackathon={hackathon} />
        ))}
      </SimpleGrid>
    </MotionSimpleGrid>
  );
};

export default HackathonCards;
