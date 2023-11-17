"use client";

import { Flex } from "@chakra-ui/react";

import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Home() {
  return (
    <Flex direction="column" minH="100vh">
      <title>Raghav Pillai</title>
      <Navbar />
      <Hero />
      <div style={{ height: "10vh" }}></div>
      <About />
      <Footer />
    </Flex>
  );
}
