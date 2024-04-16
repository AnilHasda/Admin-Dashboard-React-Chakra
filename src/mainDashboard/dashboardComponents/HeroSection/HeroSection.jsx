import React from "react";
import HeroHeaderComponent from "./HeroHeaderComponent";
import Portfolio from "./Portfolio";
import { Box } from "@chakra-ui/react";
import Transaction from "./Transaction";
import HeroFooter from "../herofooter/HeroFooter";
const HeroSection = () => {
  return (
    <>
      <HeroHeaderComponent />
      <Box h="auto"w="auto"overflowY="scroll"overflowX="hidden">
      <Box w="auto" h="auto" m="auto"bg="#F3F3F7" display="flex"flexWrap="wrap"alignItems="center"gap="24px">
        <Box>
          <Portfolio />
        </Box>
        <Box>
          <Transaction />
        </Box>
      </Box>
      <Box>
        <HeroFooter />
      </Box>
      </Box>
    </>
  );
};

export default HeroSection;
