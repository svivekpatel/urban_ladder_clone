import React from "react";
import { Stack } from "@chakra-ui/react";
import { Text, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const WishlistEmpty = () => {
  const navigate = useNavigate();
  const handleBrowsing = () => {
    navigate("/");
  };
  return (
    <>
      <Stack
        h={{ base: "30rem", md: "60rem" }}
        textAlign={"center"}
        width={{ base: "97%", md: "70%" }}
        m={"auto"}
        pt={{ base: "100px", md: "150px" }}
      >
        <Stack top="15%" position={"relative"}>
          <Text
            m="auto"
            borderTopRightRadius={"40px"}
            borderBottomLeftRadius={"40px"}
            borderBottom={"2px solid Black"}
            borderTop={"2px solid red"}
            fontWeight={"600"}
            p="10px"
            w={{ base: "98%", md: "70%" }}
          >
            Oops! There are no items in your wishlist. Continue browsing and add
            some!
          </Text>

          <Flex pt="30px" justify={"center"}>
            <Button
              onClick={() => handleBrowsing()}
              transition={"500ms"}
              width={{ base: "80%", md: "30%" }}
              bg={"#61171d"}
              _hover={{
                bg: "#c15151",
              }}
              color="white"
            >
              CONTINUE BROWSING
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default WishlistEmpty;
