"use client";

import { Box, Card, CardBody, Flex, Image, Link, Text } from "@chakra-ui/react";

export default function Me() {
  return (
    <Box
      w={{ base: "90%", sm: "70%", lg: "60%" }}
      mb={10}
      mx="auto"
      p={10}
    >
      <Text mb={5} fontSize="5xl" textAlign={"center"} fontWeight="bold">
        me
      </Text>
      <Card
        bg={"rgba(40, 40, 40, 0.3)"}
        border={"1px solid rgba(100, 100, 100, 0.2)"}
        pb={4}
      >
        <CardBody>
          <Flex justifyContent="center" alignItems="center">
            <Image
              src="/raghav2.png"
              alt="Raghav Pillai"
              boxSize={150}
              borderRadius="full"
              marginBottom={5}
            />
          </Flex>
          <Text textAlign={"center"} minW={10} maxW={"75w"} textColor={"white"}>
            hi, i'm raghav. i'm a co-founder @{" "}
            <Link
              textColor="rgb(150, 83, 251)"
              href="https://speck.sh"
              isExternal
              fontWeight={"bold"}
            >
              speck
            </Link>
            , an applied AI software lab. building{" "}
            <Link
              textColor="rgb(150, 83, 251)"
              href="https://paige.sh"
              isExternal
              fontWeight={"bold"}
            >
              Paige
            </Link>
            , the world's first AI frontend engineer. 
            <br /><br />
            i previously did ml and swe at anduril, autonomous vehicle research at utd, swe at amazon and consulting ranging from seed stage startups to f500 companies. 
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}
