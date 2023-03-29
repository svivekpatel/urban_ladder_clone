import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./ProductLowerBody.css";
import { SimpleCarouselSlider } from "react-simple-carousel-image-slider";
import "react-simple-carousel-image-slider/dist/index.css";

const ProductDimensionForChair = () => {
  const images = [
    "https://www.ulcdn.net/images/products/369333/original/Eames_DSW_Side_Chair_Replica_Patchwork_06_1H3T4004_DM.jpg?1628522149",

    "https://www.ulcdn.net/images/products/116590/original/Eames_DSW_Side_Chair_Replica_Patchwork_dim1.png?1628659009",
  ];

  return (
    <>
      <Text className="headingAfterLine">Product Dimensions</Text>
      <Stack w={{ md: "80%" }} margin="auto" pl={{ base: "10px", md: "80px" }}>
        <SimpleCarouselSlider
          responsive={[
            {
              breakPoint: 420,
              height: "190px",
              parallax: false,
            },
            {
              breakPoint: 600,
              height: "360px",
            },
          ]}
          images={images}
          autoplay={false}
          width="100%"
          height="415px"
        />
      </Stack>
    </>
  );
};

export default ProductDimensionForChair;
