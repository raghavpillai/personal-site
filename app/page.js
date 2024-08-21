"use client";

import { Flex } from "@chakra-ui/react";

import About from "./sections/about/about";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Navbar from "./sections/navbar";

export default function Home() {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </Flex>
  );
}
