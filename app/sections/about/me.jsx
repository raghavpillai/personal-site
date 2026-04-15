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
      <Text mb={5} fontSize="5xl" textAlign="center" fontWeight="bold">
        me
      </Text>
      <Card
        bg="rgba(40, 40, 40, 0.3)"
        border="1px solid rgba(100, 100, 100, 0.2)"
        pb={4}
      >
        <CardBody>
          <Flex justifyContent="center" alignItems="center">
            <Image
              src="/me.png"
              alt="Raghav Pillai"
              boxSize={150}
              borderRadius="full"
              marginBottom={5}
            />
          </Flex>
          <Text textAlign="center" minW={10} maxW="75w" textColor="white">
            hi, i'm raghav. i'm building in the cyber defense industry.

            <br /><br />
            i was previously the co-founder and ceo of{" "}
            <Link
              textColor="rgb(150, 83, 251)"
              href="https://speck.sh"
              isExternal
              fontWeight="bold"
            >
              speck
            </Link>
            , which got acquired in early 2026. i'm a yc alum (w24).
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}
