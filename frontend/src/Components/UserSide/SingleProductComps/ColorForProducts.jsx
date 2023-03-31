import React from "react";
import { SimpleGrid, Stack, Text } from "@chakra-ui/react";

export const ColorForChair = () => {
  return (
    <>
      <Stack>
        <Text mt={"20px"} fontWeight={"500"}>
          COLOR
        </Text>

        <SimpleGrid gap={"5px"} columns={{ base: 3 }}>
          {/* --------- map colors here */}
          <Text
            border="1px solid"
            borderColor={"#b52b37"}
            align={"center"}
            p="4px 6px"
            bg="#FAFAFA"
            fontSize={"13px"}
            color="#b52b37"
            cursor={"pointer"}
          >
            Patchwork
          </Text>
        </SimpleGrid>
      </Stack>
    </>
  );
};

export const ColorForBed = () => {
  const [selectedBedSize, setSelectedBedSize] = React.useState(0);
  const [selectedStorage, setSelectedStorage] = React.useState(0);
  const bedSize = ["King", "Queen"];
  const storage = ["Box", "Drawer", "Hydraulic"];
  return (
    <>
      <Stack>
        {/* Finish --- 1st */}
        <Text mt={"20px"} fontSize="14px" fontWeight={"500"}>
          FINISH
        </Text>

        <SimpleGrid gap={"5px"} columns={{ base: 3 }}>
          {/* --------- map colors here */}
          <Text
            border="1px solid"
            borderColor={"#b52b37"}
            align={"center"}
            p="4px 6px"
            bg="#FAFAFA"
            fontSize={"13px"}
            color="#b52b37"
            cursor={"pointer"}
          >
            Teak
          </Text>
        </SimpleGrid>
        <Text mt={"20px"} fontSize="14px" fontWeight={"500"}>
          Bed Size
        </Text>

        <SimpleGrid gap={"5px"} columns={{ base: 3 }}>
          {/* --------- map colors here */}
          {bedSize.map((el, i) => {
            return (
              <Text
                key={i}
                onClick={() => setSelectedBedSize(i)}
                border="1px solid"
                borderColor={i === selectedBedSize ? "#b52b37" : "grey"}
                align={"center"}
                p="4px 6px"
                bg="#FAFAFA"
                fontSize={"13px"}
                color={i === selectedBedSize ? "#b52b37" : "grey"}
                cursor={"pointer"}
              >
                {el}
              </Text>
            );
          })}
        </SimpleGrid>
        <Text mt={"20px"} fontSize="14px" fontWeight={"500"}>
          Storage Type
        </Text>

        <SimpleGrid gap={"5px"} columns={{ base: 3 }}>
          {/* --------- map colors here */}
          {storage.map((el, i) => {
            return (
              <Text
                key={i}
                onClick={() => setSelectedStorage(i)}
                border="1px solid"
                borderColor={i === selectedStorage ? "#b52b37" : "grey"}
                align={"center"}
                p="4px 6px"
                bg="#FAFAFA"
                fontSize={"13px"}
                color={i === selectedStorage ? "#b52b37" : "grey"}
                cursor={"pointer"}
              >
                {el}
              </Text>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export const ColorForSofa = () => {
  const directions = ["Left", "Right"];
  const [selected, setSelected] = React.useState(0);

  return (
    <>
      <Stack>
        {/* Finish --- 1st */}

        <Text mt={"20px"} fontSize="14px" fontWeight={"500"}>
          Align Direction
        </Text>

        <SimpleGrid gap={"5px"} columns={{ base: 3 }}>
          {/* --------- map colors here */}
          {directions.map((el, i) => {
            return (
              <Text
                key={i}
                onClick={() => setSelected(i)}
                border="1px solid"
                borderColor={i === selected ? "#b52b37" : "grey"}
                align={"center"}
                p="4px 6px"
                bg="#FAFAFA"
                fontSize={"13px"}
                color={i === selected ? "#b52b37" : "grey"}
                cursor={"pointer"}
              >
                {el}
              </Text>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};
