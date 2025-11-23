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
} from "@chakra-ui/react";
// import {
//   FaLinkedin,
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaXTwitter,
// } from "react-icons/fa6";

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
            Nu International
          </Heading>

          <Flex direction="column" gap="2" color="white">
            <FooterLink>About Nu</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Newsroom</FooterLink>
            <FooterLink>Investor Relations ↗</FooterLink>
          </Flex>
        </Box>

        {/* Column 2 */}
        <Box>
          <Heading as="h4" fontSize="md" mb="4">
            Global Presence
          </Heading>

          <Flex direction="column" gap="2">
            <FooterLink>Brazil ↗</FooterLink>
            <FooterLink>Mexico ↗</FooterLink>
            <FooterLink>Colombia ↗</FooterLink>
          </Flex>
        </Box>

        {/* Column 3 */}
        <Box>
          <Heading as="h4" fontSize="md" mb="4">
            Blogs
          </Heading>

          <Flex direction="column" gap="2">
            <FooterLink>Home ↗</FooterLink>
            <FooterLink>Brazil ↗</FooterLink>
            <FooterLink>Mexico ↗</FooterLink>
            <FooterLink>Colombia ↗</FooterLink>
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
            © 2024 ONG — Todos os direitos reservados
          </Text>
          <Text fontSize="sm" opacity={0.5}>
            Rua Exemplo, 123 — São Paulo, SP — 00000-000
          </Text>
        </Box>

        {/* Social Icons */}
        {/* <HStack gap="4">
          <SocialIcon icon={FaLinkedin} />
          <SocialIcon icon={FaYoutube} />
          <SocialIcon icon={FaFacebook} />
          <SocialIcon icon={FaInstagram} />
          <SocialIcon icon={FaXTwitter} />
        </HStack> */}
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
//       >
//           {{icon}}
//     </Box>
//   );
// }
