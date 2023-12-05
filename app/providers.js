"use client";

import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background:
          "linear-gradient(50deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 20%, rgba(0,0,0,1) 50%, rgba(20,20,20,1) 75%, rgba(30,30,30,1) 100%)",
      },
    },
  },

  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },

  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
