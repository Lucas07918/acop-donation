// import { Box, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
// import { useState } from "react";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// export function HeroCarousel() {
//   // Array que depois você troca pelas imagens reais
//   const slides = [
//     { id: 1, bg: "#e3e9ff" },
//     { id: 2, bg: "#ffe8e3" },
//     { id: 3, bg: "#e8ffe3" },
//   ];

//   const [current, setCurrent] = useState(0);

//   const isMobile = useBreakpointValue({ base: true, md: false });

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <Box
//       position="relative"
//       width="100%"
//       height="calc(100vh - 72px)" // Ajuste a altura da navbar aqui caso seja diferente
//       overflow="hidden"
//     >
//       {/* Container de todos os slides */}
//       <Flex
//         width={`${slides.length * 100}%`}
//         height="100%"
//         transform={`translateX(-${current * (100 / slides.length)}%)`}
//         transition="0.6s ease"
//       >
//         {slides.map((slide) => (
//           <Box
//             key={slide.id}
//             width={`${100 / slides.length}%`}
//             height="100%"
//             bg={slide.bg}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             fontSize="2xl"
//             color="#19376d"
//           >
//             Slide {slide.id}
//           </Box>
//         ))}
//       </Flex>

//       {/* Botão prev */}
//       <IconButton
//         aria-label="Previous slide"
//         icon={<HiChevronLeft size={32} />}
//         onClick={prevSlide}
//         position="absolute"
//         top="50%"
//         left="16px"
//         transform="translateY(-50%)"
//         variant="ghost"
//         bg={isMobile ? "rgba(255,255,255,0.6)" : "transparent"}
//         borderRadius="full"
//       />

//       {/* Botão next */}
//       <IconButton
//         aria-label="Next slide"
//         icon={<HiChevronRight size={32} />}
//         onClick={nextSlide}
//         position="absolute"
//         top="50%"
//         right="16px"
//         transform="translateY(-50%)"
//         variant="ghost"
//         bg={isMobile ? "rgba(255,255,255,0.6)" : "transparent"}
//         borderRadius="full"
//       />
//     </Box>
//   );
// }

import type { IconButtonProps } from "@chakra-ui/react";
import { Box, Carousel, IconButton, Image } from "@chakra-ui/react";
import { forwardRef } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export function Slider() {
  return (
    <Carousel.Root
      slideCount={items.length}
      maxW="full"
      mx="auto"
      h="calc(100vh - 64px)"
      gap="4"
      position="relative"
      colorPalette="white"
      overflow="hidden"
    >
      <Carousel.Control gap="4" width="full" height="full" position="relative">
        <Carousel.PrevTrigger asChild>
          <ActionButton insetStart="4">
            <LuArrowLeft />
          </ActionButton>
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="100%" height="100%" overflow="hidden">
          {items.map((src, index) => (
            <Carousel.Item key={index} index={index} width="100%" height="100%">
              <Image
                src={src}
                alt={`Product ${index + 1}`}
                objectFit="cover"
                height="100%"
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          <ActionButton insetEnd="4">
            <LuArrowRight />
          </ActionButton>
        </Carousel.NextTrigger>

        <Box position="absolute" bottom="6" width="full">
          <Carousel.Indicators
            transition="width 0.2s ease-in-out"
            transformOrigin="center"
            opacity="0.5"
            boxSize="2"
            _current={{ width: "10", bg: "colorPalette.subtle", opacity: 1 }}
          />
        </Box>
      </Carousel.Control>
    </Carousel.Root>
  );
}

const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function ActionButton(props, ref) {
    return (
      <IconButton
        {...props}
        ref={ref}
        size="xs"
        variant="outline"
        rounded="full"
        position="absolute"
        zIndex="1"
        bg="bg"
      />
    );
  }
);

const items = [
  "https://images.unsplash.com/photo-1656433031375-5042f5afe894?auto=format&q=80&w=2371",
  "https://images.unsplash.com/photo-1587466412525-87497b34fc88?auto=format&q=80&w=2673",
  "https://images.unsplash.com/photo-1629581688635-5d88654e5bdd?auto=format&q=80&w=2831",
  "https://images.unsplash.com/photo-1661030420948-862787de0056?auto=format&q=80&w=2370",
  "https://images.unsplash.com/photo-1703505841379-2f863b201212?auto=format&q=80&w=2371",
  "https://images.unsplash.com/photo-1607776905497-b4f788205f6a?auto=format&q=80&w=2370",
];
