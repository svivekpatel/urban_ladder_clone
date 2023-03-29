import React from "react";
import "./ProductLowerBody.css";
import { Button, Divider, Image, Stack, Text } from "@chakra-ui/react";
import { responsive } from "./responsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const customerStories = [
  {
    data: [
      {
        img: "https://www.ulcdn.net/testimonials/250x300/1811_20160427184029.jpg",
        avatar:
          "https://graph.facebook.com/1221063714589932/picture?type=square",
        product: "Calabah Swing Chair",
        description:
          "My #ULstory .The Calabah swing chair is more than just furniture.",
        name: "Huma Farooque",
      },
      {
        img: "https://www.ulcdn.net/testimonials/250x300/1981_20160515183826.jpg",
        avatar:
          "https://graph.facebook.com/10204233976921292/picture?type=square",
        product: "Janet Loveseat",
        description:
          "#ULstory a wonderful comfy vibrant sofa the #JanetLoveSeat is now .",
        name: "Reena Chowdhury",
      },
      {
        img: "https://www.ulcdn.net/testimonials/250x300/1179_20151224154057.jpg",
        avatar:
          "https://graph.facebook.com/1005053899516990/picture?type=square",
        product: "Organic Chair Replica ",
        description: "#ULstory  Merry Christmas and a Happy New Year...Cheers",
        name: "Anumahajan Gupta",
      },
      {
        img: "https://www.ulcdn.net/testimonials/250x300/1656_20160410130222.jpg",
        avatar:
          "https://graph.facebook.com/10154089071439889/picture?type=square",
        product: "Ormond Accent Chairs - Set of 2",
        description:
          "#ULSTORY Cozy evening tea corner with the Urban Ladder Ormond lounge set.",
        name: "Rajib Kalita",
      },
    ],
  },
];

const CustomerStory = () => {
  const responsiveness = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1000, min: 700 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 700, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Text className="headingAfterLine">Customer Stories</Text>
      <Carousel
        swipeable={true}
        infinite={true}
        keyBoardControl={true}
        autoPlaySpeed={4000}
        autoPlay={false}
        draggable={true}
        showDots={false}
        responsive={responsiveness}
      >
        {customerStories[0].data.map((item, index) => (
          <Stack
            mt={"40px"}
            border={"1px solid grey"}
            mr="10px"
            p={"10px"}
            cursor={"pointer"}
            key={index}
            align="center"
          >
            <Image src={item.avatar} borderRadius="50%" w={"50px"} />
            <Stack lineHeight={"5px"} align="center" pt={"10px"} pb="8px">
              <Text
                textTransform={"uppercase"}
                fontSize="13px"
                fontWeight={"600"}
              >
                {item.name}
              </Text>
              <Text fontSize="13px" color={"#bb2b37"}>
                via Facebook
              </Text>
            </Stack>

            <Stack
              display="flex"
              align="center"
              height={"250px"}
              justify="center"
            >
              <Image w={"85%"} src={item.img} />
            </Stack>

            <Text pb={"10px"} fontSize={"13px"}>
              {item.product}
            </Text>

            <Button
              fontSize={"10px"}
              color={"white"}
              letterSpacing="1px"
              fontWeight={"light"}
              h={"25px"}
              _hover={{
                bg: "#bb2b37",
              }}
              bg="#61171d"
            >
              VIEW PRODUCT
            </Button>
            <Stack>
              <Text
                p={"9px"}
                fontSize={"14px"}
                fontStyle="italic"
                opacity={"70%"}
              >
                “{item.description}
              </Text>
            </Stack>
          </Stack>
        ))}
      </Carousel>

      <Stack pt={"30px"} align="center">
        <Button
          w={{ base: "100", md: "30%" }}
          transition={"500ms"}
          color={"#bb2b37"}
          _hover={{
            bg: "#61171d",
            color: "white",
          }}
          border={"1px solid #bb2b37"}
          bg="transparent"
        >
          VIEW ALL CUSTOMER STORIES
        </Button>
      </Stack>

      <Divider m={"auto"} orientation="horizontal" w={"97%"} />
    </>
  );
};

export default CustomerStory;
