import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { LuArrowUpFromLine } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";
const HeroHeaderComponent = () => {
  return (
    <Box
      maxWidth="60rem"
      h={{base:"auto",lg:"6.625rem"}}
      margin="auto"
      display="flex"
      alignItems="center"
      fontWeight="semibold"
      flexWrap="wrap"
      gap={{base:"30px",lg:"0px"}}
      justifyContent="space-between"
      px={{base:"20px",md:"30px",lg:"0px"}}
      py={{base:"20px",md:"30px",lg:"0px"}}
    >
      <Box h="56px" w="auto">
        <Text fontSize="14px" color="gray">
          Total Portfolio Value
        </Text>
        <Text fontSize={{base:"18px",md:"22px",lg:"24px"}} fontWeight="semibold">
          ₹ 112,312.24
        </Text>
      </Box>
      <Box h="56px" w="auto">
        <Text fontSize="14px" color="gray">
          Wallet Balances
        </Text>
        <Box display="flex" gap="24px">
          <Box display="flex" alignItems="center">
            <Text fontSize={{base:"18px",md:"22px",lg:"24px"}} paddingRight="10px" fontWeight="semibold">
              22.39401000
            </Text>
            <Text fontSize="12px" color="gray">
              BTC
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Text fontSize={{base:"18px",md:"22px",lg:"24px"}} paddingRight="10px" fontWeight="semibold">
              ₹ 1,300.00
            </Text>
            <Text fontSize="12px" color="gray">
              INR
            </Text>
          </Box>
        </Box>
      </Box>
      <Box h="56px" w="auto">
        <Box>
          <Button
            marginRight={4}
            color="#fff"
            fontSize="14px"
            fontWeight="semibold"
            colorScheme="purple"
            variant="solid"
          >
            <LuArrowDownToLine
              style={{ marginRight: "5px", fontSize: "16px" }}
            />
            Deposit
          </Button>
          <Button
            color="#fff"
            fontSize="14px"
            fontWeight="semibold"
            colorScheme="purple"
            variant="solid"
          >
            <LuArrowUpFromLine
              style={{ marginRight: "5px", fontSize: "16px" }}
            />
            Withdraw
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroHeaderComponent;
