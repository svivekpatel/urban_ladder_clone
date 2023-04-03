import { Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import FreeHomeDelivery from "./FreeHomeDelivery";
import BottomAccordion from "./BottomAccordion";
import BottomTabs from "./BottomTabs";
import ProductDimensionForChair from "./ProductDimensionForChair";
import SimilarProducts from "./SimilarProducts";
import PopularAcrossSite from "./PopularAcrossSite";
import CustomerStory from "./CustomerStory";
import ProductDimensionForSofa from "./ProductDimensionForSofa";
import ProductDimensionForBed from "./ProductDimensionForBed";

const ProductLowerBody = ({ data }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Stack
        m={"auto"}
        w={{ base: "98%", md: "70%" }}
        p={{ base: "10px", md: 0 }}
      >
        <FreeHomeDelivery />
        {Object.keys(data).length > 0 && data.title.includes("Chair") ? (
          <ProductDimensionForChair />
        ) : (
          ""
        )}

        {Object.keys(data).length > 0 && data.title.includes("Sofa") ? (
          <ProductDimensionForSofa />
        ) : (
          ""
        )}

        {Object.keys(data).length > 0 && data.title.includes("Bed") ? (
          <ProductDimensionForBed />
        ) : (
          ""
        )}

        {isDesktop ? <BottomTabs /> : <BottomAccordion />}
        <SimilarProducts />
        <PopularAcrossSite />
        <CustomerStory />
      </Stack>
    </>
  );
};

export default ProductLowerBody;
