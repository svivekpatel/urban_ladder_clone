// import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image, Divider, Box } from "@chakra-ui/react";
import React from "react";

import Carousel from "react-multi-carousel";
import { responsive } from "../SingleProductComps/responsive";

const Popular = () => {
  return (
    <>
      <Box width={{ base: "100%", md: "70%" }} margin="auto">
        <Carousel
          swipeable={true}
          infinite={true}
          keyBoardControl={true}
          autoPlaySpeed={4000}
          autoPlay={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
        >
          {data.map((e) => (
            <Box
              mb={"50px"}
              mt={"50px"}
              mr={"20px"}
              maxH={"350px"}
              cursor={"pointer"}
              // width={"70%"}
              key={e.id}
            >
              <Image src={e.img} alt="#" />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Divider m={"auto"} orientation="horizontal" w={"97%"} />
    </>
  );
};

export default Popular;

const data = [
  {
    img: "https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916",
    id: 1,
  },
  {
    img: "https://www.ulcdn.net/images/products/223893/product/Twain_Study_Table_LP.jpg?1544673336",
    id: 2,
  },
  {
    img: "https://www.ulcdn.net/images/products/82584/product/1956_Lounge___Ottoman_Replica_Black_LP.jpg?1519629745",
    id: 3,
  },
  {
    img: "https://www.ulcdn.net/images/products/159172/product/Thorpe_Upholstered_Storage_Bed_Queen_LP.jpg?1510822520",
    id: 4,
  },
  {
    img: "https://www.ulcdn.net/images/products/201632/product/Larsson_Study_Table_TK_00_LP.jpg?1533033869",
    id: 5,
  },
  {
    img: "https://www.ulcdn.net/images/products/201808/product/Truman_Study_Table__Creamy_Crust_Finish_Teak_LP.jpg?1624608812",
    id: 6,
  },
  {
    img: "https://www.ulcdn.net/images/products/150729/product/Thorpe_Upholstered_Storage_Bed_King_Revised_LP.jpg?1580728894",
    id: 7,
  },
  {
    img: "https://www.ulcdn.net/images/products/216193/product/Carven_lounge_chair_Maroon_replace_LP.jpg?1569471073",
    id: 8,
  },
  {
    img: "https://www.ulcdn.net/images/products/15146/product/Zulu_Chest_of_Drawers_00_1H3T5079_LP.jpg?1449047474",
    id: 9,
  },
];
