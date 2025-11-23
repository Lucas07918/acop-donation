import {
  Flex,
  HStack,
  Box,
  Text,
  Link,
  Drawer,
  Button,
  CloseButton,
  Portal,
  // ClientOnly,
  // IconButton,
  // Skeleton,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
// import { useColorMode } from "../ui/color-mode";

import logo from "../../assets/img/acop-logo-removebg-preview.png";

export function Navbar() {
  const menuItems = ["O que fazemos", "Faça parte", "Outros"];
  const [open, setOpen] = useState(false);
  // const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Flex
          as="nav"
          role="navigation"
          aria-label="Main navigation"
          w="100%"
          h="64px"
          align="center"
          justify="space-between"
          px="6"
          bg="white"
          color="#19376d"
          boxShadow="sm"
          borderBottom="1px solid"
          borderColor="gray.200"
          position="relative"
        >
          {/* Logo */}
          <Box>
            {/* <Text fontSize="xl" fontWeight="bold">
              LOGO
            </Text> */}
            <Image
              src={logo}
              height="auto"
              h="32px" // altura igual aos outros itens
              objectFit="contain"
              cursor="pointer"
            />
          </Box>

          {/* Navigation Items */}
          <HStack gap="6" display={{ base: "none", md: "flex" }}>
            {["O que fazemos"].map((label) => (
              <Link
                key={label}
                href="#"
                px="3"
                py="2"
                borderRadius="md"
                role="menuitem"
                display="inline-block"
                _hover={{
                  textDecoration: "none",
                  bg: "rgba(25, 55, 109,0.12)", // caixinha arredondada sutil
                }}
                _active={{ transform: "scale(0.99)" }}
                _focusVisible={{
                  boxShadow: "0 0 0 3px rgba(25, 55, 109,0.18)",
                }}
                transition="background-color 150ms, transform 100ms"
              >
                <Text fontSize="md" fontWeight="medium" color="#43368f">
                  {label}
                </Text>
              </Link>
            ))}
            {/* <ClientOnly fallback={<Skeleton boxSize="8" />}>
              <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                {colorMode === "light" ? <LuSun /> : <LuMoon />}
              </IconButton>
            </ClientOnly> */}
          </HStack>

          {/* Mobile Menu Button */}
          <Drawer.Trigger asChild>
            <Button
              transition="transform 0.2s"
              _open={{ transform: "rotate(90deg)" }}
              display={{ base: "flex", md: "none" }}
            >
              {open ? <LuX size={22} /> : <LuMenu size={22} />}
            </Button>
          </Drawer.Trigger>
        </Flex>

        {/* MENU MOBILE (Collapsible Content) */}
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body display="flex" flexDir="column" gap={3}>
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    w="90%"
                    textAlign="center"
                    px="3"
                    py="3"
                    borderRadius="md"
                    _hover={{
                      bg: "rgba(25, 55, 109, 0.12)",
                      textDecoration: "none",
                    }}
                    _active={{
                      bg: "rgba(25, 55, 109, 0.18)",
                    }}
                    transition="all 120ms"
                  >
                    {item}
                  </Link>
                ))}
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}
