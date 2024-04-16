import React from "react";
import { Box ,Text} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
const LeftComponent = () => {
  return (
    <Box w={{base:"full",lg:"386px"}}h="auto">
      <Text color="#6c00c8">
        <FaEnvelope style={{height:"24px",width:"24px"}} />
      </Text>
      <Text fontSize="32px"fontWeight="medium"py="10px">Contact Us</Text>
      <Text fontWeight="regular"fontSize="14px"color="#535D66">Have a question or just want to know more? Feel free to reach out to us.</Text>
    </Box>
  );
};

export default LeftComponent;
