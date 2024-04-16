import React from "react";
import { Box } from "@chakra-ui/react";
import Btn from "./components/Btn";
import Tabs from "./components/Table/components/Tabs"
import Dashboard from "../mainDashboard/Dashboard/Dashboard";
import Navigation from "../mainDashboard/dashboardComponents/Navigation/Navigation";
const Transaction = () => {
  return <Box display="flex"maxW="1440px"margin="auto">
      <Dashboard />
      <Box w="100%">
        <Navigation/>
        <Btn />
        <Tabs />
      </Box>
    </Box>
};

export default Transaction;
