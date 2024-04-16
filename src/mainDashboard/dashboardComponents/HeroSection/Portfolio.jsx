import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { LuPlusCircle } from "react-icons/lu";
import { LuMinusCircle } from "react-icons/lu";
const Portfolio = () => {
  return (
    <Box h="330px" w={{base:"100vw",xl:"468px"}} borderRadius="16px"boxSizing="border-box"marginTop="10px" bg="#fff" ml={{base:"0px",xl:"56px"}}>
      <Box
        h="58px"
        w={{base:"97vw",xl:"420px"}}
        margin="auto"
        marginBottom="1.5rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"   
        position="relative"
        top="24px"
      >
        <Box>
          <Text color="gray" fontSize=".875rem">
            Current Price
          </Text>
          <Box display="flex" alignItems="center" gap={3}>
            <Text fontSize={{base:"18px",md:"22px",lg:"24px"}} fontWeight="semibold">
              ₹26,670.25
            </Text>
            <Text color="gray" fontSize=".875rem">
              <MdArrowOutward size="14px" style={{ display: "inline-block" }} />
              0.04%
            </Text>
          </Box>
        </Box>
        {/* button section starts form here */}
        <Box>
          <Button
            color="#fff"
            fontWeight="semibold"
            colorScheme="purple"
              variant="solid"
            marginRight={{base:"10px",sm:"20px"}}
            fontSize="14px"
            w={{base:"60px",sm:"80px"}}
          >
            <LuPlusCircle
              style={{
                display: "inline-block",
                marginRight: ".3125rem",
                fontSize: "1rem",
              }}
            />{" "}
            Buy
          </Button>
          <Button
            color="#fff"
            fontWeight="semibold"
            colorScheme="purple"
            variant="solid"
            fontSize=".875rem"
            w={{base:"60px",sm:"80px"}}
            mr="10px"
          >
            <LuMinusCircle
              style={{
                display: "inline-block",
                marginRight: ".3125rem",
                fontSize: "1rem",
              }}
            />
            Sell
          </Button>
          {/* button section ends here */}
        </Box>
      </Box>
      {/* 1w section starts form here */}
      <Box
        h="27px"
        w="147px"
        display="flex"
        bg="#EEEEF4"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
        left="95%"
        transform="translateX(-100%)"
        top="30px"
      >
        <Box
          h="25px"
          w="1.8375rem"
          fontSize="12px"
          color="gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="semibold"
          _hover={{ backgroundColor: "#fff", color: "#000" }}
          cursor="pointer"
        >
          1H
        </Box>
        <Box
          h="25px"
          w="1.8375rem"
          fontSize=".75rem"
          color="gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="semibold"
          _hover={{ backgroundColor: "#fff", color: "#000" }}
          cursor="pointer"
        >
          1H
        </Box>
        <Box
          h="25px"
          w="1.8375rem"
          fontSize=".75rem"
          color="gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="semibold"
          _hover={{ backgroundColor: "#fff", color: "#000" }}
          cursor="pointer"
        >
          1H
        </Box>
        <Box
          h="25px"
          w="1.8375rem"
          fontSize=".75rem"
          color="gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="semibold"
          _hover={{ backgroundColor: "#fff", color: "#000" }}
          cursor="pointer"
        >
          1H
        </Box>
      </Box>
      {/* 1w section ends from here */}
      {/* graph section starts from here */}
      <Box h="116px"w={{base:"97%",xl:"420px"}}bgImage="url('./images/Graph.png')"margin="auto"marginTop="40px"marginBottom="20px">
      </Box>
      {/* graph section ends here */}
      {/* portfolio bottom section starts form here */}
      <Box h="14px"w={{base:"90%",xl:"420px"}}margin="auto"display="flex"alignItems='center'justifyContent="space-between">
        <Text fontSize="12px"color="gray">7:15 PM</Text>
        <Text fontSize="12px"color="gray">12:55 AM</Text>
        <Text fontSize="12px"color="gray">6:35 AM</Text>
        <Text fontSize="12px"color="gray">12:15 PM</Text>
        <Text fontSize="12px"color="gray">5:55 PM</Text>
      </Box>
      {/* portfolio bottom section ends here */}
    </Box>
  );
};

export default Portfolio;
