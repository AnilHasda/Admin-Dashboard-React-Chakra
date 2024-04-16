import React from "react";
import { Box, Stack,HStack, Text, Textarea } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";
const RightComponent = () => {
  return (
    <Box h="auto" w={{base:"100%",lg:"550px"}}display="flex"flexDirection="column">
      <form style={{ height: "auto", "@media(max-width:767px)":{width:"100%"} ,"@media(min-width:768px)":{width:"502px"}}}>
        <Text fontSize="14px" fontWeight="medium"pt="15px">
          You will receive response within 24 hours of time of submit.
        </Text>
        <Stack m="auto" my="15px"direction={{base:"column",lg:"row"}}>
          <FormControl>
            <FormLabel fontSize="12px" fontWeight="medium">
              Name
            </FormLabel>
            <Input type="text" w={{base:"100%",lg:"239px"}} h="38px" />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="12px" fontWeight="medium">
              Surname
            </FormLabel>
            <Input type="text" w={{base:"100%",lg:"239px"}} h="38px" />
          </FormControl>
        </Stack>
        <FormControl>
          <FormLabel fontSize="12px" fontWeight="medium">
            Email
          </FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl my="15px">
          <FormLabel fontSize="12px" fontWeight="medium">
            Message
          </FormLabel>
          <Textarea placeholder="Enter you message..." resize="none" />
        </FormControl>
        <Box display="flex" my="20px">
          <Checkbox>
            <HStack fontSize="12px" fontWeight="medium">
              <Text>I agree with </Text>
              <Text color="#6c00c8">Terms & Conditions.</Text>
            </HStack>
          </Checkbox>
        </Box>
        <Button fontSize="14px" fontWeight="medium" w="full" color="#797E82">
          Send a Message
        </Button>
      </form>
      <Button fontSize="14px" w={{base:"100%",lg:"full"}} m="auto" my={{base:"20px",lg:"0px"}}position="relative"top={{base:"0px",lg:"20px"}}>
        Book a Meeting
      </Button>
    </Box>
  );
};

export default RightComponent;
