import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Avatar,
  Box,
  Divider,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { AiFillInfoCircle } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import AdminDrawer from "../AdminDrawer";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Dashboard from "../dashboard";
import Products from "../Products-Cat/products";
import Orders from "../Orders/orders";
import Customers from "../customers";
import AccountInfo from "../accountInfo";
const AdminMenu = () => {
  const prodRef = useRef();
  const dashboardRef = useRef();
  const customerRef = useRef();
  const orderRef = useRef();
  const accountRef = useRef();
  // const discountRef = useRef();
  const [admin, setAdmin] = useState([]);

  // const getAdminData = () => {
  //   axios
  //     .get(`dummyData/Admin-Details`)
  //     .then((res) => setAdmin(res.data))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getAdminData();
  // }, []);
  // console.log(admin);

  return (
    <>
      <Tabs display={"flex"} >
        <TabList
        // border={"2px solid yellow"}
          display={{ base: "none", md: "inherit" }}
          textAlign={"center"}
          flexDirection={"column"}
          w={{ md: "30%", lg: "20%" }}
          padding={"15px"}
          backgroundColor={"#61171d"}
          color={"white"}
          position={"fixed"}
          top={0}
          left={0}
          h={"100vh"}
        >
          {/* <Box width={"45%"} m={"auto"} mt={0} mb={0}>
            <Image
              alt="logo"
              src="https://i.ibb.co/M2WxvSC/Shoe-Land.png"
            ></Image>
          </Box> */}

          <Box textAlign={"center"} mt={"20px"}>
            <Avatar size={"2xl"} src={admin.Image}></Avatar>
          </Box>
          <Box textAlign={"center"} mt={"20px"} mb={"20px"}>
            <Text>{"ADMIN"}</Text>
            <Text color={"gray.400"}>{"admin@gmail.com"}</Text>
          </Box>

          <Tab
            ref={dashboardRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              // bg: "#00b5b8",
              bg: "red.500",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Dashboard
          </Tab>

          <Tab
            ref={prodRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              // bg: "#00b5b8",
              bg: "red.500",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Listings
          </Tab>
          <Tab
            ref={orderRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              // bg: "#00b5b8",
              bg: "red.500",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Orders
          </Tab>
          <Tab
            ref={customerRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bg: "red.500",
              // colorScheme:"red",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Customers
          </Tab>
          {/* <Tab
            ref={discountRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bg: "#00b5b8",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Discounts
          </Tab> */}
          <Box padding={"5px 0px"}>
            <Divider />
          </Box>
          <Tab
            ref={accountRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              // bg: "#00b5b8",
              bg: "red.500",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}
          >
            Account Info
          </Tab>
          <Link to={"/"}>
            {" "}
            <Button
              width={"100%"}
              mt={"5px"}
              variant={"solid"}
              borderRadius={"5px"}
              colorScheme={"red"}
              _focus={{ outline: "none" }}
              border={"none"}
            >
              Logout
            </Button>
          </Link>
        </TabList>

        <TabPanels pl={{ md: "32%", lg: "21%" }}>
          <TabPanel p={0}>
            <Dashboard />
          </TabPanel>
          <TabPanel p={0}>
            <Products />
          </TabPanel>
          <TabPanel p={0}>
            <Orders />
          </TabPanel>
          <TabPanel p={0}>
            <Customers />
          </TabPanel>
          {/* <TabPanel p={0}>
            <Discounts />
          </TabPanel> */}
          <TabPanel p={0}>
            <AccountInfo />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* small screen navbars */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"10px"}
        backgroundColor={"#0c0e1f"}
        color={"white"}
        position={"fixed"}
        width={"100%"}
        top={0}
        left={0}
      >
        <AdminDrawer
          orderRef={orderRef}
          dashboardRef={dashboardRef}
          customerRef={customerRef}
          // discountRef={discountRef}
          prodRef={prodRef}
        />
        <Box>
          <Menu>
            <MenuButton>
              <Avatar src={admin.Image} name={admin.Name}></Avatar>
            </MenuButton>
            <MenuList backgroundColor={"#0c0e1f"} border={"1px solid #27293a"}>
              <MenuItem backgroundColor={"#0c0e1f"}>
                <Box
                  onClick={() => {
                    accountRef.current.click();
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <AiFillInfoCircle />{" "}
                  <Text ml={"20px"} fontSize={"md"}>
                    Account Info
                  </Text>
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuItem backgroundColor={"#0c0e1f"} color={"red.600"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <FiLogOut />{" "}
                  <Link to={"/"}>
                    {" "}
                    <Text ml={"20px"} fontSize={"md"}>
                      Logout
                    </Text>
                  </Link>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default AdminMenu;
