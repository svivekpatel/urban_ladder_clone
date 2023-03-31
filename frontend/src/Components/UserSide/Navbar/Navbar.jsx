import React, { useState } from "react";
import Assets from "../../../Assets/Furniture.png";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
          <Menu zIndex={9}>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Text} color="#3e3f42">
                  {isOpen ? (
                    <i class="fa-solid fa-user"></i>
                  ) : (
                    <i class="fa-solid fa-user"></i>
                  )}
                </MenuButton>
                <MenuList>
                  <MenuItem>{<Login />}</MenuItem>
                  <MenuItem>{<SignUp />}</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
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
        // border={"1px solid red"}
        gap={5}
        margin="auto"
        justifyContent="center"
        alignItems="center"
        top={{ lg: "123px", xl: "123px" }}
        right="0"
        left="0"
        zIndex={1}
        textAlign="center"
        borderBottom="1px solid #D8D8D8 "
        backgroundColor="#fff"
      >
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Deal Zone
        </Text>
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Sofas & Recliners
        </Text>
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Living
        </Text>
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Bedroom & Mattresses
        </Text>
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Dining
        </Text>
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Storage
        </Text>
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Study
        </Text>
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Lighting & Decor
        </Text>
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Outdoor
        </Text>
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Interiors
        </Text>
        <Text
          fontFamily={"serif"}
          fontWeight={"100"}
          _hover={{ color: "#CE5959", cursor: "pointer" }}
        >
          Trending
        </Text>
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

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [userName, setuserName] = useState("");
  const [password, Setpassword] = useState("");
  const handleLogin = () => {
    const payload = {
      userName,
      password,
    };
    console.log(payload);
    onClose();
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button width={"100%"} onClick={onOpen}>
        Login
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>User name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="User Name"
                value={userName}
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  Setpassword(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleLogin} colorScheme="blue" mr={3}>
              Log In
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [userName, setuserName] = useState("");
  const [password, Setpassword] = useState("");
  const handleLogin = () => {
    const payload = {
      userName,
      password,
    };
    console.log(payload);
    onClose();
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button width={"100%"} onClick={onOpen}>
        Sign Up
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>User name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="User Name"
                value={userName}
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  Setpassword(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleLogin} colorScheme="blue" mr={3}>
              Sign Up
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
