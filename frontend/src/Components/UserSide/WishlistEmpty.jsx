import React from "react";
import { Stack } from "@chakra-ui/react";
import { Text, Flex, Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WishlistEmpty = () => {
  const navigate = useNavigate();
  const handleBrowsing = () => {
    navigate("/");
  };
  return (
    <>
      <Stack
        h={"60rem"}
        textAlign={"center"}
        width={{ base: "97%", md: "70%" }}
        m="auto"
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
          <Stack left={{ base: "35%" }} position={"relative"} w={"30%"}>
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: [-10, 0, 10, 0, -10, 0, 10, 0, -10, 0, 10, 0],
              }}
              whileTap={{
                scale: 0.8,
                rotate: [-10, 0, 10, 0],
                borderRadius: "100%",
              }}
            >
              <Image src="https://media0.giphy.com/media/E09MRfFAJ5qwFXX8Aq/giphy.gif?cid=ecf05e47xojctpys7nwrdwrncoxq57wlxat5332al24az1pw&rid=giphy.gif&ct=s" />
            </motion.div>
          </Stack>
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
