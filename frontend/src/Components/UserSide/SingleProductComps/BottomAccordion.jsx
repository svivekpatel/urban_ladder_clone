import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const BottomAccordion = () => {
  const accordionList = [
    "Designed in 1952 by Charles E. and Ray E., the DSW chair is one in a wide series of Shell chairs that they designed in a variety of materials.",
    "The DSW is a code referring to the chairs use and construction - D for Dining, S for Side, and W for Wood Legs",
    "The perfect proportions make the chair attractive and comfortable in a wide variety of situations",
    "Can be used as a dining chair or as an attractive side chair for the living room or bedroom",
    "This high-quality replica features a plastic shell and beech wood legs, with fabric upholstery for the patchwork variant",
    "While we do a thorough quality check at our end, for colour matching, a 5-10% colour variation may appear in a batch depending on production conditions. There might also be a slight variation in the position of the patchwork on the product you receive. Minor variations are completely normal, and in keeping with industry standards, we allow for a maximum of a 10% variation.",
    "Refer to images for dimensions",
  ];

  const accordionTitle = [
    {
      title: "FEATURES",
    },
    {
      title: "PROPERTIES",
    },
    {
      title: "CARE INSTRUCTIONS",
    },
    {
      title: "WARRANTY",
    },
    {
      title: "RETURNS",
    },
    {
      title: "QUALITY PROMISE",
    },
  ];

  return (
    <>
      <Accordion pt={"60px"} allowToggle>
        {accordionTitle.map((el, ind) => {
          return (
            <AccordionItem key={ind}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {el.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul style={{ fontSize: "14px" }}>
                  {accordionList.map((i, inds) => {
                    return <li key={inds}>{i}</li>;
                  })}
                </ul>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default BottomAccordion;
