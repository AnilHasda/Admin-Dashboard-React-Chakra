import React from "react";
import { Box } from "@chakra-ui/react";
import Dashboard from "../mainDashboard/Dashboard/Dashboard";
import Navigation from "../mainDashboard/dashboardComponents/Navigation/Navigation";
import MainComponent from "./components/MainComponent";
const SupportSection = () => {
  return <Box display="flex"maxW="1440px"margin="auto">
      <Dashboard />
      <Box w="100%">
        <Navigation/>
        <MainComponent/>
      </Box>
    </Box>
};

export default SupportSection;
