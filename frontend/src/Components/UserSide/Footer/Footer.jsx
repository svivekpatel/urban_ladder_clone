import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  Image,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import Assets from "../../../Assets/Furniture.png";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      marginTop="200px"
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              {/* <Logo color={useColorModeValue("gray.700", "white")} /> */}
              <Image src={Assets} />
            </Box>
            <Text fontSize={"sm"}>
              © 2023 Furniture Wale. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("#61171d", "#61171d")}
                color={useColorModeValue("white", "#61171d")}
                _hover={{
                  bg: "red.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box backgroundColor="#61171d" padding="30px">
        <Box width="70%" margin="auto" color="#fff" textAlign="left">
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>Popular Furniture Categories:</Text>

            <Text fontSize="12px">
              Bed , Beds By Design , Sofa Set , Wooden Sofa , Sofas By Design ,
              Sofa Cum Bed , Double Bed , Single Bed , Queen Size Bed , King
              Size Bed , Chair , Wooden Table , Study Table , Study Chair ,
              Wardrobe , Chest of Drawers , Futon , Loveseat , Dining Table Set
              , Dining Chair , Bookshelves , Shoe Rack , TV Units , Recliners ,
              Furniture , Office Furniture , Office Table , Office Chair , 2
              Seater Sofa , TV Cupboard , TV Showcase , TV Stand , Center Table
            </Text>
          </Box>
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>Shop Furniture By Room:</Text>
            <Text fontSize="12px">
              Living Room Furniture , Bedroom Furniture , Dining Room Furniture
              , Study Room Furniture , Bar Furniture , Balcony Furniture
            </Text>
          </Box>
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>Popular Decor Categories:</Text>
            <Text fontSize="12px">
              Home Decor , Carpets , Mirrors , Study Lamps , Table Lamps , Bed
              Sheets , Floor Lamps , Wall Lights , Lighting , Ceiling Lights ,
              Quilt , Wall Decor , Wall Mirror , Table Decor , Table Cover ,
              Table Napkin , Table Mat , Cushion Cover , Table Runners , Home
              Furnishing , Wall Art , Showpiece , Artificial Plants , Photo
              Frame , Candle Stand , Clocks , Wall Clocks , Festive Lights ,
              Candles , Bath Mat , Vases , Flower Vase , Bathroom Accessories ,
              Bathroom Mirrors
            </Text>
          </Box>
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>Popular Mattress Categories:</Text>
            <Text fontSize="12px">
              Mattresses , Single Bed Mattresses , Double Bed Mattresses , King
              Size Mattresses , Queen Size Mattresses , Foam Mattress , Coir
              Mattress , Latex Mattress , Spring Mattress , Orthopaedic Mattress
            </Text>
          </Box>
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>Popular Tableware Categories:</Text>
            <Text fontSize="12px">
              Shot Glass , Dinner Plates , Baking Tray , Forks , Dinner Set ,
              Tumbler , Drinking Glass , Cutlery Holder , Tissue Holder , Bottle
              Opener , Spoons , Whiskey Glass , Kitchen Organizers , Hot Pot ,
              Chef's Cap , Glass Jars , Kitchen Gloves , Kitchen Storage
              Containers , Bar Tools , Masala Box , Glass Bottles , Coasters ,
              Cutlery Set , Knives Set , Oven Gloves , Aprons , Cake Stand ,
              Fruit Basket , Spice Box , Beer Glass , Bowls , Oil Dispenser ,
              Housewarming Gifts
            </Text>
          </Box>
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>Delivering in:</Text>
            <Text fontSize="12px">
              Aanamalai , Ahmedabad , Alappuzha , Aler , Alibaug , Alleppey ,
              Ambala , Ambarnath , Amdapur , Amtala , Anand , Anikorai ,
              Arakkonam , Arimpur , Arnala , Arutla , Asansol , Athikunna ,
              Athipalli , Aurangabad , Avanshi ... More
            </Text>
          </Box>
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>We Accept:</Text>
            <Text>Visa | Mastercard | Maestro | Amex | Rupay | Bhim upi</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
