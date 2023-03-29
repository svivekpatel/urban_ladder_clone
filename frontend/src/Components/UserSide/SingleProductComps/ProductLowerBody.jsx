import { Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import FreeHomeDelivery from "./FreeHomeDelivery";
import BottomAccordion from "./BottomAccordion";
import BottomTabs from "./BottomTabs";
import ProductDimensionForChair from "./ProductDimensionForChair";
import SimilarProducts from "./SimilarProducts";
import PopularAcrossSite from "./PopularAcrossSite";
import CustomerStory from "./CustomerStory";

const ProductLowerBody = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Stack
        m={"auto"}
        w={{ base: "98%", md: "70%" }}
        p={{ base: "10px", md: 0 }}
      >
        <FreeHomeDelivery />
        <ProductDimensionForChair />
        {isDesktop ? <BottomTabs /> : <BottomAccordion />}
        <SimilarProducts />
        <PopularAcrossSite />
        <CustomerStory />
      </Stack>
    </>
  );
};

export default ProductLowerBody;
