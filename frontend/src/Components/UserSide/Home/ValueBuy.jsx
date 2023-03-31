// import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image, Divider, Box } from "@chakra-ui/react";
import React from "react";

import Carousel from "react-multi-carousel";
import { responsive } from "../SingleProductComps/responsive";

const ValueBuy = () => {
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

export default ValueBuy;

const data = [
  {
    img: "https://www.ulcdn.net/media/Collection/listings/Coffee_Tables-taxon_1.png?1675918016",
    id: 1,
  },
  {
    img: "https://www.ulcdn.net/media/Collection/listings/TV_Units-taxon-2.png?1675918237",
    id: 2,
  },
  {
    img: "https://www.ulcdn.net/media/Collection/listings/Shoe_Racks-taxon_3.png?1675918241",
    id: 3,
  },
  {
    img: "https://www.ulcdn.net/media/Collection/listings/Sofa_Beds_taxon_4.png?1675918246",
    id: 4,
  },
  {
    img: "https://www.ulcdn.net/media/Collection/listings/Bookshelves-taxon_5.png?1675918252",
    id: 5,
  },
  {
    img: "https://www.ulcdn.net/media/Collection/listings/Dining-taxon_6.jpg?1675918258",
    id: 6,
  },
  {
    img: "https://www.ulcdn.net/media/Collection/listings/Lounge_Chairs-taxon_7.png?1675918263",
    id: 7,
  },
  {
    img: "https://www.ulcdn.net/media/Collection/listings/Beds_taxon_8.png?1675918266",
    id: 8,
  },
  {
    img: "https://www.ulcdn.net/media/Collection/listings/Dining_Chairs-taxon_9.png?1675918269",
    id: 9,
  },
];
