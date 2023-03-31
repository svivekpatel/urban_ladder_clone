import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <hr style={{ marginTop: "20px", marginBottom: "30px" }} />
      <Box>
        <Box
          display={"grid"}
          width="70%"
          margin={"auto"}
          height="fit-content"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          lineHeight="7"
        >
          <Box textAlign={"center"} height="fit-content">
            <Text fontSize="18px" className="headingAfterLine">
              The Company:
            </Text>
            <Grid
              gridTemplateColumns={"repeat(2,1fr)"}
              gridTemplateRows={"repeat(4,1fr)"}
              fontSize="12px"
            >
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                About Us
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Help
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Blog
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Inside UL
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Careers
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Press
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Team
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Privacy Policy
              </GridItem>
            </Grid>
          </Box>
          <Box textAlign={"center"} height="fit-content">
            <Text fontSize="18px" className="headingAfterLine">
              More Information:
            </Text>
            <Grid
              gridTemplateColumns={"repeat(2,1fr)"}
              gridTemplateRows={"repeat(4,1fr)"}
              fontSize="12px"
            >
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Fees and Payment
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Shipping & Delivery
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Terms and Conditions
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Warranty, Return
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Contact Us
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Visit Us
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Buy In Bulk
              </GridItem>
            </Grid>
          </Box>
          <Box textAlign={"center"} height="fit-content">
            <Text fontSize="18px" className="headingAfterLine">
              Explore More
            </Text>
            <Grid
              gridTemplateColumns={"repeat(1,1fr)"}
              gridTemplateRows={"repeat(4,1fr)"}
              fontSize="12px"
            >
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Refer & Earn
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                Gift Cards
              </GridItem>
            </Grid>
          </Box>
          <Box textAlign={"center"} height="fit-content">
            <Text fontSize="18px" className="headingAfterLine">
              Address
            </Text>
            <Grid
              gridTemplateColumns={"repeat(1,1fr)"}
              gridTemplateRows={"repeat(2,1fr)"}
              fontSize="12px"
            >
              <GridItem
                _hover={{ color: "#CE5959", cursor: "pointer" }}
                lineHeight="4"
              >
                Reliance Retail Limited, 3rd Floor, Court House, Lokmanya Tilak
                Marg, Dhobi Talao, Mumbai- 400 002, Maharashtra, India
              </GridItem>
              <GridItem _hover={{ color: "#CE5959", cursor: "pointer" }}>
                CIN: U01100MH1999PLC120563
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        display={"grid"}
        width={{ base: "100%", md: "70%" }}
        margin="auto"
        // border={"1px solid red"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
      >
        <Box textAlign={"center"} height="fit-content">
          <Text fontSize="18px" className="headingAfterLine">
            Connect With Us:
          </Text>
          <Box
            display={"flex"}
            justifyContent="center"
            gap="5"
            fontSize={"25px"}
            color="#2f4858"
          >
            <Text _hover={{ color: "#CE5959", cursor: "pointer" }}>
              <i class="fa-solid fa-phone"></i>
            </Text>
            <Text _hover={{ color: "#CE5959", cursor: "pointer" }}>
              <i class="fa-regular fa-envelope"></i>
            </Text>
            <Text _hover={{ color: "#CE5959", cursor: "pointer" }}>
              <i class="fa-brands fa-facebook-f"></i>
            </Text>
            <Text _hover={{ color: "#CE5959", cursor: "pointer" }}>
              <i class="fa-brands fa-twitter"></i>
            </Text>
            <Text _hover={{ color: "#CE5959", cursor: "pointer" }}>
              <i class="fa-brands fa-pinterest"></i>
            </Text>
            <Text _hover={{ color: "#CE5959", cursor: "pointer" }}>
              <i class="fa-brands fa-youtube"></i>
            </Text>
            <Text _hover={{ color: "#CE5959", cursor: "pointer" }}>
              <i class="fa-brands fa-instagram"></i>
            </Text>
            <Text _hover={{ color: "#CE5959", cursor: "pointer" }}>
              <i class="fa-brands fa-linkedin"></i>
            </Text>
          </Box>
        </Box>
        <Box textAlign={"center"} height="fit-content">
          <Text fontSize="18px" className="headingAfterLine">
            Download App:
          </Text>
          <Box display={"flex"} justifyContent="center">
            <Image
              src="https://www.ulcdn.net/media/badges/app_store/app_store_badge.svg"
              alt="#"
            />
            <Image
              width={{ base: "135px" }}
              src="https://www.ulcdn.net/media/badges/play_store/google-play-badge.png"
              alt="#"
            />
          </Box>
        </Box>
      </Box>
      <Box backgroundColor="#61171d" padding="30px" marginTop={"30px"}>
        <Box width="70%" margin="auto" color="#fff" textAlign="left">
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>Popular Furniture Categories:</Text>

            <Text textAlign={"left"} fontSize="12px">
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
            <Text textAlign={"left"} fontSize="12px">
              Living Room Furniture , Bedroom Furniture , Dining Room Furniture
              , Study Room Furniture , Bar Furniture , Balcony Furniture
            </Text>
          </Box>
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>Popular Decor Categories:</Text>
            <Text textAlign={"left"} fontSize="12px">
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
            <Text textAlign={"left"} fontSize="12px">
              Mattresses , Single Bed Mattresses , Double Bed Mattresses , King
              Size Mattresses , Queen Size Mattresses , Foam Mattress , Coir
              Mattress , Latex Mattress , Spring Mattress , Orthopaedic Mattress
            </Text>
          </Box>
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>Popular Tableware Categories:</Text>
            <Text textAlign={"left"} fontSize="12px">
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
            <Text textAlign={"left"} fontSize="12px">
              Aanamalai , Ahmedabad , Alappuzha , Aler , Alibaug , Alleppey ,
              Ambala , Ambarnath , Amdapur , Amtala , Anand , Anikorai ,
              Arakkonam , Arimpur , Arnala , Arutla , Asansol , Athikunna ,
              Athipalli , Aurangabad , Avanshi ... More
            </Text>
          </Box>
          <Box display={{ md: "flex", lg: "flex", xl: "flex" }} gap={20}>
            <Text>We Accept:</Text>
            <Text textAlign={"left"}>
              Visa | Mastercard | Maestro | Amex | Rupay | Bhim upi
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
