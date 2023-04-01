import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";
import "./imageComp.css";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

const WarrantyComp = ({ data, bg }) => {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  let addressValue = JSON.parse(localStorage.getItem("address")) || {
    location: "",
    pincode: "",
  };
  const [location, setLocation] = React.useState(
    addressValue.location.length > 0 ? addressValue.location : "Bangalore"
  );
  const [pincode, setPincode] = React.useState(
    addressValue.pincode.length > 0 ? addressValue.pincode : "560001"
  );

  const [currentDate, setCurrentDate] = React.useState("");
  const [currentMonth, setCurrentMonth] = React.useState("");

  const [newDate, setNewDate] = React.useState("");
  const [newMonth, setNewMonth] = React.useState("");

  React.useEffect(() => {
    let d = new Date().toString();
    let date = new Date(d);

    d = d.split(" ");
    let currentDateValue = d[1];
    let currentMonthValue = d[2];

    date.setDate(date.getDate() + 1);
    date = date.toString();
    date = date.split(" ");

    let newCurrentDateValue = date[1];
    let newCurrentMonthValue = date[2];

    setCurrentDate(() => currentDateValue);

    setCurrentMonth(() => currentMonthValue);

    setNewDate(() => newCurrentDateValue);
    setNewMonth(() => newCurrentMonthValue);
  }, []);

  const submitAddress = () => {
    if (location.length < 3) {
      return toast({
        title: `Enter a Valid Location`,
        position: "bottom",
        isClosable: true,
      });
    } else if (pincode.length < 6) {
      return toast({
        title: `Enter a Valid pincode`,
        position: "bottom",
        isClosable: true,
      });
    }
    let d = new Date().toString();
    let date = new Date(d);
    d = d.split(" ");
    let currentDateValue = d[1];
    let currentMonthValue = d[2];

    let randomValue = Math.round(Math.random() * 10);
    date.setDate(date.getDate() + +randomValue);
    date = date.toString();
    date = date.split(" ");

    let newCurrentDateValue = date[1];
    let newCurrentMonthValue = date[2];

    setCurrentDate(() => currentDateValue);

    setCurrentMonth(() => currentMonthValue);

    setNewDate(() => newCurrentDateValue);
    setNewMonth(() => newCurrentMonthValue);

    localStorage.setItem("address", JSON.stringify({ location, pincode }));

    onClose();
    toast({
      title: `Location Updated`,
      position: "bottom",
      isClosable: true,
      status: "success",
    });
  };

  return (
    <Stack>
      <Flex
        mt={"10px"}
        lineHeight={"14px"}
        gap={"10px"}
        fontSize={{ base: "15px", md: "13px" }}
        p={"8px"}
        align="center"
        border={"1px solid rgba(0,0,0,20%)"}
        borderRadius="4px"
      >
        <Box width={"30px"}>
          <MdOutlineSecurity fontSize={"25px"} />
        </Box>
        <Flex wrap={"wrap"} gap="5px">
          <Text fontWeight={"600"}> 12 months warranty</Text>
          <Text> on this product</Text>
          <Text color={"#b52b37"} textDecor={"underline"} cursor="pointer">
            {" "}
            Know More
          </Text>
        </Flex>
      </Flex>

      {/* -------- Delivery Section */}

      <Stack
        pt={"15px"}
        borderRadius="3px"
        border={"1px solid rgba(0,0,0,20%)"}
      >
        <Flex pl={"10%"} className="ribbon" align={"center"} gap={"10px"}>
          <AiOutlineThunderbolt fontSize={"16px"} />
          <Text fontWeight={"500"} fontSize={"12px"}>
            Delivered Within 3-5 Days
          </Text>
        </Flex>

        <Flex
          borderBottom="1px solid grey"
          p="0px 5px 10px 5px"
          align={"center"}
          justify={"space-between"}
        >
          <Flex align={"center"} gap="5px">
            <ImLocation fontSize={"15px"} />
            <Text pl="12px" fontWeight={"500"} fontSize={"14px"}>
              {location} - {pincode}
            </Text>
          </Flex>

          <Flex>
            <Button
              pr={{ base: "15px", sm: "15px", md: "10px" }}
              onClick={onOpen}
              variant={"link"}
              fontSize={"14px"}
              textDecor="underline"
              color={"#b52b37"}
            >
              Change
            </Button>
          </Flex>
        </Flex>

        <Flex
          borderBottom="1px solid grey"
          p="0px 5px 10px 5px"
          gap="5px"
          align={"center"}
          fontSize={"14px"}
        >
          <TbTruckDelivery fontSize={"18px"} />
          <Text pl="10px">Delivery Between </Text>
          <Text p="5px 0px" fontWeight={"600"}>
            {currentDate} {currentMonth} - {newDate} {newMonth}
          </Text>
        </Flex>

        <Flex p={"5px"} color="#b52b37" fontSize="12px">
          •{" "}
          <Text ml={"15px"} fontWeight="500" align={"left"}>
            You can cancel your order before shipped, and a full refund will be
            initiated.
          </Text>
        </Flex>
      </Stack>

      <Flex cursor={"pointer"} color={"white"} p={"8px 2px"} bg={"#2F4858"}>
        <Image
          filter={"invert(100%)"}
          w={"30%"}
          src="https://cdn2.iconfinder.com/data/icons/webinar-1/68/46-512.png"
        />

        <Stack p={"12px 0px 0px 0px"} align={"center"} lineHeight={"10px"}>
          <Text
            fontWeight={"500"}
            fontSize={{ base: "15px", sm: "17px", md: "15px" }}
          >
            Need a closer look?
          </Text>
          <Text
            pb={{ base: "0", sm: "10px", md: "0" }}
            pt={{ base: "0", sm: "10px", md: "0" }}
            fontSize={{ base: "11px", sm: "13px", md: "11px" }}
          >
            Get on an <i>instant video call</i> with our expert
          </Text>

          <Button
            fontSize="12px"
            letterSpacing={"2px"}
            w={"50%"}
            h="30px"
            bg={bg}
            _hover={{
              bg: "#b52b37",
            }}
            color={"white"}
          >
            Call now
          </Button>
        </Stack>
      </Flex>

      <Button
        _hover={{
          bg: "#b52b37",
        }}
        bg={bg}
        borderRadius="none"
        letterSpacing={"2px"}
        color={"white"}
      >
        EXPLORE SETS ›
      </Button>
      <AddressModal
        location={location}
        pincode={pincode}
        setLocation={setLocation}
        setPincode={setPincode}
        onClose={onClose}
        isOpen={isOpen}
        submitAddress={submitAddress}
      />
    </Stack>
  );
};

const AddressModal = ({
  location,
  pincode,
  isOpen,
  onClose,
  submitAddress,
  setLocation,
  setPincode,
}) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      // leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Enter Your Delivery Location
          </AlertDialogHeader>

          <AlertDialogBody>
            <Input
              mb={"10px"}
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="City Name"
              type="text"
            />
            <Input
              value={pincode}
              placeholder="Pincode"
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              type="number"
            />
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              colorScheme="red"
              onClick={() => {
                submitAddress();
              }}
              ml={3}
            >
              Change
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default WarrantyComp;
