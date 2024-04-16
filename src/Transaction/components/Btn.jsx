import React from 'react'
import {Box,Button,Text} from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";
const Btn = () => {
  return (
    <Button 
    colorScheme='purple'
    boxSizing='border-box'
   marginLeft={{base:"calc(90% - 100px)",lg:"calc(85% -100px)"}}
    marginTop="24px"
    fontSize="14px"
    translateX="100%"
    fontWeight={500}
    ><MdOutlineFileDownload size="18px"/><Text pl="5px">Export CSV</Text></Button>
  )
}

export default Btn