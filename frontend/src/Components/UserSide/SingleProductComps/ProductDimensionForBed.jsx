import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./ProductLowerBody.css";
import { SimpleCarouselSlider } from "react-simple-carousel-image-slider";
import "react-simple-carousel-image-slider/dist/index.css";

const ProductDimensionForBed = () => {
  const images = [
    "https://www.ulcdn.net/images/products/359739/original/Boston_Storage_Bed_Teak_Finish_Queen_Bed_Size_dim_159.jpg?1627279227",

    "https://www.ulcdn.net/images/products/231995/original/Boston_Storage_Bed_Teak_Finish_Queen_Bed_Size_Box_Storage_Type_dim002.jpg?1622013941",
  ];

  return (
    <>
      <Text className="headingAfterLine">Product Dimensions</Text>
      <Stack w={{ md: "80%" }} margin="auto" pl={{ base: "10px", md: "80px" }}>
        <SimpleCarouselSlider
          responsive={[
            {
              breakPoint: 330,
              height: "180px",
              parallax: false,
            },
            {
              breakPoint: 350,
              height: "190px",
              parallax: false,
            },
            {
              breakPoint: 420,
              height: "200px",
              parallax: false,
            },
            {
              breakPoint: 700,
              height: "300px",
            },
            {
              breakPoint: 900,
              height: "300px",
            },
          ]}
          images={images}
          autoplay={false}
          width="100%"
          height="400px"
        />
      </Stack>
    </>
  );
};

export default ProductDimensionForBed;
