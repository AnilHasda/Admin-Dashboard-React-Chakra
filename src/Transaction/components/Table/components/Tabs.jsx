import React from "react";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Button,
} from "@chakra-ui/react";
import Table1 from "../Table1";
import Table2 from "../Table2";
import { v4 as uuidv4 } from "uuid";
import { IoMdSearch } from "react-icons/io";
const TabsNav = () => {
  let unique = uuidv4();
  let tabItems = [
    {
      item1: "ALL",
      item2: 349,
      key: 1,
    },
    {
      item1: "Deposit",
      item2: 114,
      key: 2,
    },
    {
      item1: "Withdraw",
      item2: 213,
      key: 4,
    },
    {
      item1: "Trade",
      item2: 22,
      key: 5,
    },
    {
      item1: <IoMdSearch />,
      item2: "Search by ID or destination",
      key: 6,
    },
  ];
  return (
      <Tabs px="30px" pt="16px">
        <TabList display="flex" gap={10} flexWrap="wrap">
          {tabItems.map((ele, index) => {
            if (index < tabItems.length - 1) {
              return (
                <Tab key={ele.key} ml={index === tabItems.length - 1 && "auto"}>
                  <Box display="flex" gap={3}>
                    {" "}
                    <Text>{ele.item1}</Text>
                   <Box h="auto"w="auto"px="8px" bg="#eeeef4" borderRadius="full">
                    {ele.item2}
                   </Box>
                    
                    
                  </Box>
                </Tab>
              );
            } else {
              return (
                <Box
                  key={ele.key}
                  marginLeft="auto"
                  marginRight="5px"
                  display="flex"
                  alignItems="center"
                  gap={4}
                >
                  {ele.item1}
                  <input
                    type="text"
                    placeholder={ele.item2}
                    style={{ outline: "none", border: "none", width: "200px" }}
                  />
                </Box>
              );
            }
          })}
        </TabList>

        <TabPanels>
          <TabPanel><Table1/></TabPanel>
          <TabPanel><Table2/></TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
  );
};

export default TabsNav;
