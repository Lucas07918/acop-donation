import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export function Main() {
  return (
    <>
      <Box w="100%" bg="#43368f">
        <Center h="60vh">
          <VStack wrap="wrap" gap="6">
            <Heading size="4xl">Mais detalhes ao clicar aqui</Heading>
            <Button>Clique aqui</Button>
          </VStack>
        </Center>
      </Box>
      <Stack>
        <Box h="calc(100vh - 64px)">
          <Box aspectRatio="square" bg="red"></Box>
          <Text fontSize="2xl" textAlign="center" mt="4">
            How Nubank builds its leadership team and a culture of ownership and
            impact
          </Text>
          <Text fontSize="md" textAlign="center" mt="2" color="gray.600">
            Case Study · 6 min read
          </Text>
        </Box>
      </Stack>
    </>
  );
}
