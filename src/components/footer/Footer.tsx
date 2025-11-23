import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  //   Icon,
  //   HStack,
  Separator,
  HStack,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export function Footer() {
  return (
    <Box bg="#000" color="white" py="12" px={{ base: "6", md: "12" }}>
      {/* Top Sections */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap="8"
        mb="12"
        color="white"
      >
        {/* Column 1 */}
        <Box>
          <Heading as="h4" fontSize="md" mb="4">
            Informações
          </Heading>

          <Flex direction="column" gap="2" color="white">
            <FooterLink>Sobre nós</FooterLink>
          </Flex>
        </Box>
      </Grid>

      <Separator opacity={0.3} mb="6" />

      {/* Bottom Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        gap="4"
      >
        {/* Logo + Text */}
        <Box>
          <Text fontSize="sm" opacity={0.75}>
            © 2025 ACOP — Todos os direitos reservados
          </Text>
          {/* <Text fontSize="sm" opacity={0.5}>
            CNPJ https://cnpj.biz/62495539000116
          </Text> */}
        </Box>

        {/* Social Icons */}
        <HStack gap="4">
          <FaLinkedin />
          <FaYoutube />
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
        </HStack>
      </Flex>
    </Box>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      fontSize="sm"
      _hover={{ textDecoration: "underline", opacity: 0.9 }}
      cursor="pointer"
      color="white"
    >
      {children}
    </Link>
  );
}

// function SocialIcon({ icon }: { icon: any }) {
//   return (
//     <Box
//       as={Icon}
//       icon={icon}
//       cursor="pointer"
//       boxSize="5"
//       opacity={0.75}
//       _hover={{ opacity: 1 }}
//     >
//        {Icon}
//     </Box>
//   );
// }
