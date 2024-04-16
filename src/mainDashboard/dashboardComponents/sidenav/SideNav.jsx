import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
const SideNav = () => {
  let common = [
    {
      icon: <LuLayoutDashboard />,
      desc: "Dashboard",
    },
    {
      icon: <RiArrowUpDownFill />,
      desc: "Transactions",
    },
    {
      icon: <BiSupport />,
      desc: "Support",
    },
  ];
  return (
    <Box h="100vh" w="256px" boxShadow="xl"position="relative">
      <Text
        color="purple"
        paddingBottom="42px"
        paddingTop="54px"
        textAlign="center"
        fontSize="1.25rem"
      >
        @EVERYDAYLEARN
      </Text>
      {common.map((ele,index) => {
         {if (index<=1){
          return (
            <Link to={index===1? "/"+ele.desc : "/"} key={index}>
            <Box key={index}
              display="flex"
              marginLeft={4}
              marginRight={4}
              h="2.625rem"
              w="14.5rem"
              position={index===2 && "absolute"}
              top="90%"
              alignItems="center"
              paddingLeft={4}
              color="gray"
              _hover={{
                backgroundColor: "#EEEEF4",
                color: "#000",
                fontWeight: "semibold",
              }}
              transition="all .3s linear"
              cursor="pointer"
            >
              {ele.icon} <Text paddingLeft="32px">{ele.desc}</Text>
            </Box>
            </Link>
          );
         }
        else{
          return (
            <Link to="/SupportSection"key={index}>
            <Box
              display="flex"
              marginLeft={4}
              marginRight={4}
              h="2.625rem"
              w="14.5rem"
              position={index===2 && "absolute"}
              top="90%"
              alignItems="center"
              paddingLeft={4}
              color="gray"
              _hover={{
                backgroundColor: "#EEEEF4",
                color: "#000",
                fontWeight: "semibold",
              }}
              transition="all .3s linear"
              cursor="pointer"
            >
              {ele.icon} <Text paddingLeft="32px">{ele.desc}</Text>
            </Box>
            </Link>
          );
        }
      }
       
      })}
    </Box>
  );
};

export default SideNav;
