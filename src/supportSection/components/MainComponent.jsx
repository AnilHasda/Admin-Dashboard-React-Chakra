import React from 'react'
import {Box} from "@chakra-ui/react"
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
const MainComponent = () => {
  return (
   <Box display="flex"justifyContent="space-between"marginBottom="50px"  mt="24px"px={{base:"20px",lg:"56px"}}gap={5}flexDirection={{base:"column",lg:"row"}}>
<LeftComponent/>
<RightComponent/>
   </Box>
  )
}

export default MainComponent