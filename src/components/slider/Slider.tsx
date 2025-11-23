import type { IconButtonProps } from "@chakra-ui/react";
import { Box, Carousel, IconButton, Image } from "@chakra-ui/react";
import { forwardRef } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import image1 from "../../assets/img/jovem-medico.jpg";
import image2 from "../../assets/img/clinica-vazia.jpg";
import image3 from "../../assets/img/blur-hospital.jpg";

export function Slider() {
  return (
    <Carousel.Root
      slideCount={items.length}
      maxW="full"
      mx="auto"
      h="calc(100vh - 64px)"
      position="relative"
      colorPalette="white"
      overflow="hidden"
      autoplay={{ delay: 2000 }}
      loop={true}
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
  image1,
  image2,
  image3,
  // "https://images.unsplash.com/photo-1656433031375-5042f5afe894?auto=format&q=80&w=2371",
  // "https://images.unsplash.com/photo-1587466412525-87497b34fc88?auto=format&q=80&w=2673",
  // "https://images.unsplash.com/photo-1629581688635-5d88654e5bdd?auto=format&q=80&w=2831",
  // "https://images.unsplash.com/photo-1661030420948-862787de0056?auto=format&q=80&w=2370",
  // "https://images.unsplash.com/photo-1703505841379-2f863b201212?auto=format&q=80&w=2371",
  // "https://images.unsplash.com/photo-1607776905497-b4f788205f6a?auto=format&q=80&w=2370",
];
