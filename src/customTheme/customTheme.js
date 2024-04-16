import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: "#000",
    white: "#fff",
    customColor: {
      // Define your custom color shades here
      50: "#f0f0f0",
      100: "#d0d0d0",
      // Add more shades as needed
    },
  },
});

export default theme;
