import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "30px",
    // overflow: "hidden",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <Box>
        <Image
          src="https://www.ulcdn.net/media/Slideshow/Dining-slideshow-3.jpg?1679042848"
          alt="#"
          width={"100%"}
        />
      </Box>
      <Box>
        <Image
          src="https://www.ulcdn.net/media/Slideshow/Swing-in-action-Slideshow.jpg?1679059226"
          alt="#"
          width={"100%"}
        />
      </Box>
      <Box>
        <Image
          src="https://www.ulcdn.net/media/Slideshow/UI-Main-Banners-Slideshow_17th.jpg?1679055928"
          alt="#"
          width={"100%"}
        />
      </Box>
      <Box>
        <Image
          src="https://www.ulcdn.net/media/Slideshow/Set-the-scene-slideshow.jpg?1679855163"
          alt="#"
          width={"100%"}
        />
      </Box>
      <Box>
        <Image
          src="https://www.ulcdn.net/media/Slideshow/Beds-slideshow-2.jpg?1679042844"
          alt="#"
          width={"100%"}
        />
      </Box>
      <Box>
        <Image
          src="https://www.ulcdn.net/media/Slideshow/Dining-slideshow-3.jpg?1679042848"
          alt="#"
          width={"100%"}
        />
      </Box>
    </Slider>
  );
}
