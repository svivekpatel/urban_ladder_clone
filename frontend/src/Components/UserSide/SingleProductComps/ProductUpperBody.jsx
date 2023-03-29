import { Divider, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import ImageComp from "./ImageComp";
import AddToCart from "./AddToCart";
import axios from "axios";

const ProductUpperBody = () => {
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);

  const bg = "#61171d";
  React.useEffect(() => {
    axios.get("http://localhost:3000/data").then((res) => {
      setData(res.data[1]);
      setData2(res.data);
    });
  }, []);
  console.log(data);
  return (
    <>
      <Stack
        m={"auto"}
        w={{ base: "98%", md: "90%", lg: "75%" }}
        p={{ base: "10px", md: 0 }}
      >
        <Flex gap="30px" mb={"30px"} direction={{ base: "column", md: "row" }}>
          <ImageComp bg={bg} data={data} />
          <AddToCart bg={bg} data={data} />
        </Flex>
        <Divider m={"auto"} w={"93%"} />
      </Stack>
    </>
  );
};

export default ProductUpperBody;
