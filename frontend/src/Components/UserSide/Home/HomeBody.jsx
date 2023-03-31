import React from "react";
import SimpleSlider from "./Carousel";
import { Box, Image, Text } from "@chakra-ui/react";
import CustomerStory from "../SingleProductComps/CustomerStory";
import ValueBuy from "./ValueBuy";
import Popular from "./Popular";

//color to use #61171d

const HomeBody = () => {
  return (
    <Box marginTop={{ base: "90px", md: "130px" }} fontFamily="serif">
      <Box>
        <SimpleSlider />
      </Box>
      <br />
      <br />

      {/* //Explore Our Furniture Range */}
      <Box backgroundColor={"#f9fafa"} padding="30px">
        <Text className="headingAfterLine">Explore Our Furniture Range</Text>
        <br />
        <br />

        <Box
          display={"grid"}
          margin="auto"
          textAlign={"center"}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(7,1fr)",
          }}
          width={{ base: "100%", md: "80%", lg: "70%" }}
          justifyContent="center"
          alignItems={"center"}
          fontFamily={"serif"}
          // border="1px solid red"
        >
          <Box
            _hover={{
              color: "coral",
            }}
            textAlign={"center"}
          >
            <Image
              src="https://img.icons8.com/ios/1x/discount--v2.gif"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Deal Zone</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/external-flaticons-lineal-flat-icons/64/null/external-best-seller-signaling-and-labels-flaticons-lineal-flat-icons.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>BestSellers</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/dotty/80/null/sofa-with-buttons.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Sofa</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/pastel-glyph/64/null/single-bed--v5.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Bed</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/null/external-dining-table-furniture-kiranshastry-solid-kiranshastry.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Dining</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/carbon-copy/100/null/wardrobe.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Wardrobes</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/external-modern-lines-kalash/64/null/external-place-for-rest-travel-hotels-modern-lines-kalash.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Recliners</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/ios/50/null/office-chair-2.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Seating</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/dotty/80/null/table.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Coffee Table</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/external-rabit-jes-detailed-outline-rabit-jes/62/null/external-tv-home-decoration-rabit-jes-detailed-outline-rabit-jes.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>TV Units</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/pastel-glyph/64/null/sideboard--v2.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Shoe Racks</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/ios/50/null/desk.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Study</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/ios/50/null/book-shelf.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Book Slaves</Text>
          </Box>
          <Box
            _hover={{
              color: "coral",
            }}
          >
            <Image
              src="https://img.icons8.com/external-basicons-line-edtgraphics/50/null/external-floor-home-lighting-basicons-line-edtgraphics.png"
              alt="#"
              margin="auto"
            />
            <Text fontFamily={"serif"}>Lighting</Text>
          </Box>
        </Box>
      </Box>

      {/* Value Buys In Furniture */}
      <Box>
        <Text className="headingAfterLine">Value Buys In Furniture</Text>
        <ValueBuy />
      </Box>

      <Box>
        <Text className="headingAfterLine">Popular Across Site</Text>
        <Popular />
      </Box>
      <Box
        // border={"1px solid red"}
        width={{ base: "98%", md: "70%" }}
        margin="auto"
        p={{ base: "10px", md: 0 }}
      >
        <CustomerStory />
      </Box>
    </Box>
  );
};

export default HomeBody;
