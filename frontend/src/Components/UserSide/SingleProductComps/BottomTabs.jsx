import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
} from "@chakra-ui/react";

const BottomTabs = () => {
  const tabsList = [
    "Designed in 1952 by Charles E. and Ray E., the DSW chair is one in a wide series of Shell chairs that they designed in a variety of materials.",
    "The DSW is a code referring to the chairs use and construction - D for Dining, S for Side, and W for Wood Legs",
    "The perfect proportions make the chair attractive and comfortable in a wide variety of situations",
    "Can be used as a dining chair or as an attractive side chair for the living room or bedroom",
    "This high-quality replica features a plastic shell and beech wood legs, with fabric upholstery for the patchwork variant",
    "While we do a thorough quality check at our end, for colour matching, a 5-10% colour variation may appear in a batch depending on production conditions. There might also be a slight variation in the position of the patchwork on the product you receive. Minor variations are completely normal, and in keeping with industry standards, we allow for a maximum of a 10% variation.",
    "Refer to images for dimensions",
  ];

  const tabsTitle = [
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
      <Tabs
        pr={"20px"}
        pt={"100px"}
        pb={"30px"}
        colorScheme={"red"}
        size={"sm"}
      >
        <TabList>
          <Tab>FEATURES</Tab>
          <Tab>PROPERTIES</Tab>
          <Tab>CARE INSTRUCTION</Tab>
          <Tab>WARRANTY</Tab>
          <Tab>RETURNS</Tab>
          <Tab>QUALITY PROMISE</Tab>
        </TabList>
        <TabPanels>
          <TabPanel fontSize="13px">
            {tabsList.map((el, i) => {
              return <li key={i}>{el}</li>;
            })}
          </TabPanel>
          <TabPanel fontSize="13px">
            {tabsList.map((el, j) => {
              return <li key={j}>{el}</li>;
            })}
          </TabPanel>
          <TabPanel fontSize="13px">
            {tabsList.map((el, k) => {
              return <li key={k}>{el}</li>;
            })}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Divider m={"auto"} orientation="horizontal" w={"97%"} />
    </>
  );
};

export default BottomTabs;
