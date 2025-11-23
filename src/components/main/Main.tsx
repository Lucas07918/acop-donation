import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuArrowUpRight } from "react-icons/lu";

import image1 from "../../assets/img/jovem-medico.jpg";
import image2 from "../../assets/img/clinica-vazia.jpg";
import image3 from "../../assets/img/blur-hospital.jpg";

export function Main() {
  const posts = [
    {
      category: "Valores e Cultura",
      title: "ACOP: Governança, Transparência e Impacto Social",
      description:
        "O que é a ACOP? Conheça nossa história, missão, visão e valores que guiam nossas ações em prol da saúde e bem-estar.",
      image: image1,
    },
    {
      category: "Our Presence",
      title: "Plano de Execução: Da Ciência à Prática Clínica",
      description:
        "Como a nossa instituição transforma pesquisas inovadoras em tratamentos acessíveis e eficazes para pacientes.",
      image: image2,
    },
    {
      category: "Pesquisas",
      title: "Câncer de Bexiga: Uma Crise Nacional de Saúde Pública",
      description:
        "O câncer de bexiga representa um dos maiores desafios oncológicos do país, com alta taxa de recorrência e custos elevados.",
      image: image3,
    },
  ];

  return (
    <>
      <Box w="100%" bg="#93a7c7">
        <Center h="60vh">
          <VStack wrap="wrap" gap="6" px="50px">
            <Heading size="4xl" color="#43368f" textAlign="center">
              Mais detalhes ao clicar aqui
            </Heading>
            <Button bg="#43368f" _hover={{ bg: "#7F5E9B" }}>
              Clique aqui
            </Button>
          </VStack>
        </Center>
      </Box>

      <Flex
        w="100%"
        h={{ base: "auto", md: "450px", lg: "520px" }}
        bg="#43368f"
        color="white"
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
      >
        {/* Left Side - Image */}
        <Box flex="1" overflow="hidden" h="100%" w="100%">
          <Image
            src="https://i.pinimg.com/1200x/3b/c4/8d/3bc48daa1f1c6d27f9777f245b6a5690.jpg" // troque pela sua imagem depois
            alt="Careers Image"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>

        {/* Right Side - Content */}
        <Flex
          flex="1"
          bg="#43368f"
          color="white"
          flexDir="column"
          justify="center"
          px={{ base: 6, md: 16 }}
          py={{ base: 10, md: 0 }}
        >
          <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={6}>
            Sua Doação Transforma Vidas
          </Heading>

          <Text fontSize="md" mb={8} maxW="500px">
            Oferecendo alternativas reais a pacientes sem resposta ao tratamento
            convencional, reduzindo custos, internações e dependência de insumos
            importados e transformando pesquisa em benefício direto para a
            população brasileira
          </Text>

          <Button
            variant="solid"
            bg="#A020F0"
            color="white"
            size="lg"
            w={{ base: "100%", sm: "260px" }}
            _hover={{ bg: "#b44aff" }}
          >
            Faça sua doação
            <LuArrowUpRight />
          </Button>
        </Flex>
      </Flex>

      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: 10, md: 16 }}
      >
        <Heading mb={10} fontWeight="600" fontSize={{ base: "2xl", md: "3xl" }}>
          Últimos artigos
        </Heading>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(3, 1fr)",
          }}
          gap={10}
        >
          {posts.map((post, i) => (
            <Box key={i}>
              {/* Imagem */}
              <Image
                src={post.image}
                alt={post.title}
                w="100%"
                h="210px"
                objectFit="cover"
                borderRadius="md"
                mb={4}
              />

              {/* Categoria */}
              <Text
                fontSize="xs"
                fontWeight="600"
                color="purple.600"
                textTransform="uppercase"
                mb={2}
              >
                {post.category}
              </Text>

              {/* Título */}
              <Link _hover={{ textDecoration: "underline" }} cursor="pointer">
                <Text fontSize="lg" fontWeight="600" mb={3} color="gray.900">
                  {post.title}
                </Text>
              </Link>

              {/* Descrição */}
              <Text fontSize="sm" color="gray.700" lineHeight="1.4">
                {post.description}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>

      <Flex
        w="100%"
        h={{ base: "auto", md: "450px", lg: "520px" }}
        bg="#43368f"
        color="white"
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
      >
        {/* LEFT SIDE */}
        <Flex
          flex="1"
          direction="column"
          justify="center"
          px={{ base: 6, md: 12, lg: 20 }}
          py={{ base: 12, md: 0 }}
          gap={6}
        >
          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            lineHeight="1.2"
            fontWeight="600"
          >
            Investir em Ciência
            <br /> é Investir em Vida
          </Heading>

          <Button
            variant="solid"
            bg="#A020F0"
            color="white"
            size="lg"
            w={{ base: "100%", sm: "260px" }}
            _hover={{ bg: "#b44aff" }}
          >
            Faça sua doação
            <LuArrowUpRight />
          </Button>
        </Flex>

        {/* RIGHT SIDE */}
        <Box
          flex="1"
          bg="#C74BEE"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="https://i.pinimg.com/1200x/82/5e/01/825e0100034add67f4dda0f3d9e45198.jpg"
            alt="Newsletter Illustration"
            h="100%"
            w="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </>
  );
}
