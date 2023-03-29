import React from "react";
import Assets from "../../../Assets/Furniture.png";
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="32px"
        background="#ffd166"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={2}
      >
        <Text
          align="center"
          fontSize={{ base: "10px", md: "12px", lg: "14px" }}
        >
          Set The Scene | Up to 50% off |{" "}
          <span style={{ color: "red", fontWeight: "500" }}>
            Click to shop!
          </span>
        </Text>
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent="space-around"
        alignItems="center"
        position="fixed"
        backgroundColor="#fff"
        fontSize="12px"
        borderBottom="1px solid #D8D8D8 "
        height="30px"
        top="8"
        left="0"
        right="0"
        zIndex={2}
      >
        <Box display="flex" gap="5">
          <Text>Help</Text>
          <Text>Track Order</Text>
        </Box>
        <Box display="flex" gap="5">
          <Text>Store</Text>
          <Text>Order</Text>
          <Text>Gift Cards</Text>
          <Text>Ul Services</Text>
        </Box>
      </Box>

      <Box
        display="flex"
        position="fixed"
        justifyContent="space-around"
        alignItems="center"
        top={{ base: "30px", md: "60px", lg: "60px", xl: "60px" }}
        backgroundColor="#fff"
        left="0"
        right="0"
        paddingTop="10px"
        paddingBottom="10px"
        borderBottom="1px solid #D8D8D8 "
        zIndex={2}
      >
        <Box>
          <Image width={"170px"} height="100%" src={Assets} alt="#" />
        </Box>
        <Box display={{ base: "none", md: "flex" }} width="40%">
          <SearchInput />
        </Box>
        <Box display="flex" gap={{ base: "2", md: "6" }}>
          <Text
            display={{ base: "block", md: "none", lg: "none", xl: "none" }}
            color="#3e3f42"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </Text>
          <Text color="#3e3f42">
            <i class="fa-solid fa-truck"></i>
          </Text>
          <Text>
            <i class="fa-solid fa-user"></i>
          </Text>
          <Text color="#3e3f42">
            <i class="fa-regular fa-heart"></i>
          </Text>
          <Text color="#3e3f42">
            <i class="fa-solid fa-cart-shopping"></i>
          </Text>
        </Box>
      </Box>
      <Box
        display={{ base: "none", md: "none", xl: "flex", lg: "flex" }}
        position="fixed"
        gap={5}
        margin="auto"
        justifyContent="center"
        alignItems="center"
        top={{ base: "0px", md: "123px", lg: "123px", xl: "123px" }}
        right="0"
        left="0"
        zIndex={2}
        textAlign="center"
        borderBottom="1px solid #D8D8D8 "
        backgroundColor="#fff"
      >
        <Text>Deal Zone</Text>
        <Text>Sofas & Recliners</Text>
        <Text>Living</Text>
        <Text>Bedroom & Mattresses</Text>
        <Text>Dining</Text>
        <Text>Storage</Text>
        <Text>Study</Text>
        <Text>Lighting & Decor</Text>
        <Text>Outdoor</Text>
        <Text>Interiors</Text>
        <Text>Trending</Text>
      </Box>
    </Box>
  );
};

export default Navbar;

function SearchInput() {
  return (
    <InputGroup>
      <Input borderRadius={0} tyep="text" placeholder="Search" />
      <InputRightElement width="4.5rem">
        <Box
          onClick={() => {
            return alert("Searching");
          }}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </Box>
      </InputRightElement>
    </InputGroup>
  );
}
