import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import HeroSection from './dashboardComponents/HeroSection/HeroSection'
import Navigation from "./dashboardComponents/Navigation/Navigation"
import {Box} from "@chakra-ui/react";
const DashboardPage = () => {
  return (
    <Box display="flex"gap={0} maxW="1440px"margin="auto">
<Dashboard/>
<Box w="100%">
    <Navigation/>
    <HeroSection/>
</Box>
    </Box>
  )
}

export default DashboardPage