import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
const HeroFooter = () => {
  let data = [
    {
      btnText: "Loans",
      detail:
        "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it",
    },
    {
      btnText: "Contacts",
      detail:
        "Learn more about our real estate, mortgage, and  corporate account services",
    },
  ];
  return (
    <Box display="flex" gap={{base:"20px",md:"24px"}}ml={{base:"0px",xl:"56px"}} h="auto"w="auto"pb="5px"flexDirection={{base:"column",md:"row"}} mt="5px">
      {data.map((ele, index) => {
        let colorSchema = index === 0 ? "#6B46C1" : "#fff";
        return (
          <Box
            key={index}
            h="auto"
            w={{base:"90%",md:"468px"}}
            bg={index===0?"#fff":"#6B46C1"}
            borderRadius="16px"
            marginTop="15px"
            padding="10px 15px"
            boxSizing="border-box"
            margin="auto" 
            style={{
                backgroundImage: index === 1 && `url("./images/Visual.png")`,
                backgroundPosition:"center",
                backgroundSize:"cover"
              }}
          >
            <Button
              fontSize="12px"
              color={index===0?"#FFFFFF":"#000"}
              bg={colorSchema}
              variant="solid"
              h="30px"
              borderRadius="1rem"
              _hover={{opacity:1}}
            >
              {ele.btnText}
            </Button>
            <Text
              fontSize="16px"
              fontWeight={500}
              color={index===0?"#171717":"#fff"}
              paddingTop="10px"
            >
              {ele.detail}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default HeroFooter;
