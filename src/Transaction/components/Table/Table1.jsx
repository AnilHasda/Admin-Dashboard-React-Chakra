import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Button,
} from "@chakra-ui/react";
const TablePage = () => {
  let tableHead = ["ID", "Date & Time", "Type", "Amount", "Status"];
  let tableContent = [
    {
      item1: "HD82NA2H",
      item2: {
        data1: "2022-06-09",
        data2: "07:06 PM",
      },
      item3: {
        data1: "INR Deposit",
        data2: "E-Transfer",
      },
      item4: { data1: "+ ₹81,123.10" },
      btnText: "Pending",
    },
    {
      item1: "HD82NA2H",
      item2: {
        data1: "2022-06-09",
        data2: "07:06 PM",
      },
      item3: {
        data1: "INR Withdraw",
        data2: "Wire Transfer",
      },
      item4: { data1: "+ ₹81,123.10" },
      btnText: "Processing",
    },
    {
      item1: "HD82NA2H",
      item2: {
        data1: "2022-06-09",
        data2: "07:06 PM",
      },
      item3: {
        data1: "Buy",
      },
      item4: {
        data1: "+ 12.48513391 BTC",
        data2: "- $81,123.10",
      },
      btnText: "Cancelled",
    },
    {
      item1: "HD82NA2H",
      item2: {
        data1: "2022-06-09",
        data2: "07:06 PM",
      },
      item3: {
        data1: "Sell",
      },
      item4: {
        data1: "- 0.36401628 BTC",
        data2: "+ $19,378.84",
      },
      btnText: "Completed",
    },
    {
      item1: "HD82NA2H",
      item2: {
        data1: "2022-06-09",
        data2: "07:06 PM",
      },
      item3: {
        data1: "BTC Deposit",
      },
      item4: {
         data1: "+ 4.13946104 BTC" ,
        data2:"+ $37,929.31"
        },
      btnText: "Completed",
    },
    {
      item1: "HD82NA2H",
      item2: {
        data1: "2022-06-09",
        data2: "07:06 PM",
      },
      item3: {
        data1: "BTC Withdraw",
      },
      item4: { 
        data1: "- 10.00000000 BTC",
        data2:"- $62,017.58"
       },
      btnText: "Completed",
    },
  ];
  return (
    <>
      <TableContainer h="66vh" overflowX="scroll" overflowY="scroll">
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              {tableHead.map((ele,index) => {
                if (ele === "Date & Time" || ele === "Amount") {
                  return (
                    <Th key={index}>
                      {ele}
                      <select></select>
                    </Th>
                  );
                } else {
                  return <Th key={index}>{ele}</Th>;
                }
              })}
            </Tr>
          </Thead>
          <Tbody>
            {tableContent.map((ele,index) => {
              return (
                <Tr key={index} style={{ backgroundColor: "" }}>
                  <Td>
                    <Text fontWeight={500}>{ele.item1}</Text>
                  </Td>
                  <Td>
                    <Text fontWeight={500}>{ele.item2?.data1}</Text>
                    <Text fontSize="12px" color="gray">
                      {ele.item2?.data2}
                    </Text>
                  </Td>
                  <Td>
                    <Text fontWeight={500}>{ele.item3?.data1}</Text>
                    <Text fontSize="12px" color="gray">
                      {ele.item3?.data2}
                    </Text>
                  </Td>
                  <Td>
                    <Text fontWeight={500}>{ele.item4?.data1}</Text>
                    <Text fontSize="12px" color="gray">
                      {ele.item4?.data2}
                    </Text>
                  </Td>
                  <Td>
                    <Button
                      colorScheme={
                        (ele.btnText === "Pending" && "teal") ||
                        (ele.btnText === "Processing" && "orange") ||
                        (ele.btnText === "Completed" && "green") ||
                        (ele.btnText === "Cancelled" && "red")
                      }
                      borderRadius="full"
                      h="30px"
                      fontSize="14px"
                      fontWeight="semibold"
                      opacity={1}
                    >
                      {ele.btnText}
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TablePage;
