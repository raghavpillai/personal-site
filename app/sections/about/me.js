"use client";

import { Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";

export default function Me() {
  return (
    <Box
      w={{ base: "90%", sm: "70%", md: "60%", lg: "40%" }}
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
      >
        <CardBody>
          <Flex justifyContent="center" alignItems="center">
            <Image
              src="/raghav2.png"
              alt="Raghav Pillai"
              boxSize={150}
              borderRadius={"full"}
              marginBottom={5}
            />
          </Flex>
          <Text textAlign={"center"} minW={10} maxW={"75w"}>
            currently cto @ speck, an applied AI software lab. building Paige,
            the world's first AI frontend engineer.
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}
