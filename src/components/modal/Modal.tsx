import {
  Button,
  Center,
  CloseButton,
  Dialog,
  Input,
  Portal,
  QrCode,
  Clipboard,
  IconButton,
  InputGroup,
  Text,
} from "@chakra-ui/react";

const ClipboardIconButton = () => {
  return (
    <Clipboard.Trigger asChild>
      <IconButton variant="surface" size="xs" me="-2">
        <Clipboard.Indicator />
      </IconButton>
    </Clipboard.Trigger>
  );
};

import { useState } from "react";

type ModalProps = {
  text: string;
};

export function Modal({ text }: ModalProps) {
  const [value, _setValue] = useState("https://www.google.com");
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          variant="solid"
          bg="#A020F0"
          color="white"
          size="lg"
          w={{ base: "100%", sm: "260px" }}
          _hover={{ bg: "#b44aff" }}
        >
          {text}
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Faça sua doação!</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Center flexDir="column" gap="4" w="100%">
                <QrCode.Root value={value}>
                  <QrCode.Frame>
                    <QrCode.Pattern />
                  </QrCode.Frame>
                </QrCode.Root>
                <Clipboard.Root maxW="300px" value={value}>
                  <InputGroup endElement={<ClipboardIconButton />}>
                    <Clipboard.Input asChild>
                      <Input />
                    </Clipboard.Input>
                  </InputGroup>
                </Clipboard.Root>
                <Text fontSize="sm" opacity={0.5}>
                  CNPJ: 62.495.539/0001-16
                </Text>
              </Center>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button bg="#A020F0">Fechar</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
