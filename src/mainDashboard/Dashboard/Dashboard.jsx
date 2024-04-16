import React from "react";
import SideNav from "../dashboardComponents/sidenav/SideNav";
import { Box } from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <Box maxWidth="1400px" margin="auto">
      <Box display="flex">
        <Box display={{ base: "none", lg: "block" }}>
          <SideNav />
        </Box>
      </Box> 
    </Box>
  );
};

export default Dashboard;
