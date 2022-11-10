import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Carousel() {
  const slides = [
    {
      img: "https://cdna.lystit.com/cms/blackfriday_XL_2800_1050_23a75a1eaf.gif",
    },
    {
      img: "https://cdna.lystit.com/cms/DESKTOP_XL_292112190c.png",
    },
    {
      img: "https://cdna.lystit.com/cms/DESKTOP_XL_292112190c.png",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
  return (
    <Flex
      w="full"
      bg="#f2f2f2"
      _dark={{
        bg: "#3e3e3e",
      }}
      pl={5}
      pr={5}
      alignItems="center"
      justifyContent="center"
      borderBottom={"1px solid black"}
      mb={"50px"}
    >
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="555px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Carousel;
