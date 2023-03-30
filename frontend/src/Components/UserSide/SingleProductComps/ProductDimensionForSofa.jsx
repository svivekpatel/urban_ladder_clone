import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./ProductLowerBody.css";
import { SimpleCarouselSlider } from "react-simple-carousel-image-slider";
import "react-simple-carousel-image-slider/dist/index.css";

const ProductDimensionForSofa = () => {
  const images = [
    "https://www.ulcdn.net/images/products/139464/original/FNSF52FACA3_R03C_dimensions_2.jpg?1495087907",

    "https://www.ulcdn.net/images/products/139463/original/FNSF52FACA3_R03C_dimensions_1.jpg?1495087906",
  ];

  return (
    <>
      <Text className="headingAfterLine">Product Dimensions</Text>
      <Stack w={{ md: "80%" }} margin="auto" pl={{ base: "10px", md: "80px" }}>
        <SimpleCarouselSlider
          responsive={[
            {
              breakPoint: 420,
              height: "155px",
              parallax: false,
            },
            {
              breakPoint: 600,
              height: "310px",
            },
          ]}
          images={images}
          autoplay={false}
          width="100%"
          height="320px"
        />
      </Stack>
    </>
  );
};

export default ProductDimensionForSofa;
