import React from "react";
import { Box, Text, Button, HStack } from "@chakra-ui/react";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { SiBitcoinsv } from "react-icons/si";

const Transaction = () => {
  let content = [
    {
      icon: <PiCurrencyDollarSimpleFill />,
      leftFirst: "INR Deposit",
      leftLast: "2022-06-09 7:06 PM",
      right: "+ ₹81,123.10",
      rightBottom: "",
      id: 1,
    },
    {
      icon: <SiBitcoinsv />,
      leftFirst: "BTC Sell",
      leftLast: "2022-05-27 12:32 PM",
      right: "- 12.48513391 BTC",
      rightBottom: "+ $81,123.10",
      id: 2,
    },
    {
      icon: <PiCurrencyDollarSimpleFill />,
      leftFirst: "INR Deposit",
      leftLast: "2022-06-09 7:06 PM",
      right: "+ ₹81,123.10",
      rightBottom: "",
      id: 3,
    },
  ];
  return (
    <Box
      h="330px"
      w={{ base: "97vw",sm:"100vw",xl: "468px" }}
      pl={{ base: "4px", md: ".5rem",lg:"100px",xl:"0px" }}
      pt="1.5rem"
      borderRadius="16px"
      marginLeft="24px"
      bg="#fff"
      position="relative"
        top="5px"
      margin="auto"
      ml={{lg:"0px",xl:"0px"}}
    >
      <Box fontSize=".875rem" fontWeight="500">
        Recent Transactions
      </Box>
      {content.map((ele, index) => {
        return (
          <Box
            key={ele.id}
            h="3.625rem"
            w={{ base: "full",lg:"80vw",xl: "26.25rem" }}
            display="flex"
            alignItems="center"
            gap={4}
            mt="10px"
            px={{ base: "10px", lg: "0px" }}
          >
            <Box
              fontSize="16px"
              h="40px"
              w="40px"
              borderRadius="50%"
              bg="#F3F3F7"
              display="grid"
              placeItems="center"
            >
              {ele.icon}
            </Box>
            <Box
              h="2.625rem"
              w={{ base: "100%", xl: "22.75rem" }}
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <Text fontWeight={400} color="#171717">
                  {ele.leftFirst}
                </Text>
                <Text color="#797E82" fontSize="14px">
                  {ele.leftLast}
                </Text>
              </Box>

              <Box>
                <Text color="#171717" fontWeight={500}>
                  {ele.right}
                </Text>
                <Text color="#797E82" fontSize="14px">
                  {ele.rightBottom}
                </Text>
              </Box>
            </Box>
          </Box>
        );
      })}
      <Button
        h="38px"
        w={{ base: "95%", lg:"80vw",xl: "420px" }}
        bg="#F3F3F7"
        mt="1.25rem"
        fontSize="14px"
        fontWeight={500}
      >
        See All
      </Button>
    </Box>
  );
};

export default Transaction;
