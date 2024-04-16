import React from "react";
import {
  Box,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerBody
} from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiListFill } from "react-icons/pi";
import {useLocation} from "react-router-dom";
import SideNav from "../sidenav/SideNav";
const Navigation = () => {
  let location=useLocation();
  let content=location.pathname.slice(1,100);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      h={16}
      w="100%"
      fontSize="28px"
      color="#17171"
      px={{base:"30px",md:"50px"}}
      paddingLeft={{base:"60px"}}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="md"
      position="relative"
    >
      {/* Starting of slider section */}
      <Box
        position="absolute"
        left={4}
        ref={btnRef}
        onClick={onOpen}
        display={{lg:"none"}}
      >
        <PiListFill />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <SideNav/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Ends of slider section */}
      <p>{content===""?"Dashboard":content}</p>
      <p>
        <IoPersonCircleOutline size="2.5rem" />
      </p>
    </Box>
  );
};

export default Navigation;
