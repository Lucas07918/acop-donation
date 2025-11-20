import {
  Flex,
  HStack,
  Box,
  Text,
  Link,
  Collapsible,
  VStack,
  Drawer,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export function Navbar() {
  const menuItems = ["O que fazemos", "Faça parte", "Outros"];
  const [open, setOpen] = useState(false);
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
            <Text fontSize="xl" fontWeight="bold">
              LOGO
            </Text>
          </Box>

          {/* Navigation Items */}
          <HStack gap="6">
            {["O que fazemos", "Faça parte", "Outros"].map((label) => (
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
                <Text fontSize="md" fontWeight="medium" color="#19376d">
                  {label}
                </Text>
              </Link>
            ))}
          </HStack>

          {/* Mobile Menu Button */}
          <Collapsible.Trigger asChild>
            <Collapsible.Indicator
              transition="transform 0.2s"
              _open={{ transform: "rotate(90deg)" }}
            >
              {open ? <LuX size={22} /> : <LuMenu size={22} />}
            </Collapsible.Indicator>
          </Collapsible.Trigger>
        </Flex>

        {/* MENU MOBILE (Collapsible Content) */}
        <Collapsible.Content>
          <VStack
            w="100%"
            bg="white"
            color="#19376d"
            py="4"
            gap="4"
            borderBottom="1px solid"
            borderColor="gray.200"
          >
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
          </VStack>
        </Collapsible.Content>
      </Drawer.Root>
    </>
  );
}
