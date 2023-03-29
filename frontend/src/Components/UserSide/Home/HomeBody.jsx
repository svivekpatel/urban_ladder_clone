import React from "react";
import SimpleSlider from "./Carousel";
import { Box, Text } from "@chakra-ui/react";

const HomeBody = () => {
  return (
    <Box margin="auto" marginTop={{ base: "90px", md: "130px" }}>
      <SimpleSlider />
    </Box>
  );
};

export default HomeBody;
