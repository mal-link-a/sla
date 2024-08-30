import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { ModalProps } from "@chakra-ui/modal/dist/modal";
import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { FC, RefObject, useRef } from "react";
import { actionModalStore } from "./actionModal.store";
import { observer } from "mobx-react-lite";

interface Props extends Omit<ModalProps, "children"> {
  img: string;
  text: string;
}

export const ActionModal: FC<Props> = observer(({ img, text, ...modalProps }) => {
  const [fontSize, fontPlus, fontMinus] = [actionModalStore.fontSize,actionModalStore.fontPlus, actionModalStore.fontMinus];
  let textRef = useRef() as RefObject<HTMLDivElement> | null;
  let imgRef = useRef() as RefObject<HTMLImageElement> | null;
  
  
  const onClickfontPlus = () => {
    if (textRef?.current && imgRef?.current) {
      let [textSize, imgSize] = [textRef.current.clientHeight, imgRef.current.clientHeight];
      if (textSize+50< imgSize)
        fontPlus();
    } 
  }

  return (
    <Modal isCentered {...modalProps}>
      <ModalOverlay />

      <ModalContent
        width={{ base: "90%", md: "90%" }}
        maxWidth="1200px"
        position={"absolute"}
        border={"12px outset #50bdff;"}
        paddingX="0"
        paddingY="0"
      >
        <Box
          ref={textRef}
          position="absolute"
          left={"0px"}
          bottom={"0px"}
          bg="black"
          opacity={0.5}
          w={"100%"}
          pb={1}
          pt={1}
        >
          {text ? (
            text.split("\n").map((str) => (
              <Text color="white" fontSize={fontSize} lineHeight={1.2} pl={4} pr={4}>
                {str}
              </Text>
            ))
          ) : (
            <Text></Text>
          )}
        </Box>

        <ModalCloseButton />
        <Image ref={imgRef} boxSizing="content-box" boxSize="100%" src={img} />
        <Button
        onClick = {onClickfontPlus}
          colorScheme="blackAlpha"
          border={"none"}
          ml={0}
          mt={0}
          p={0}
          maxW={"24px"}
          maxH={"24px"}
          left={"40px"}
          top={"0px"}
          position="absolute"
          variant="outline"
        >
          <AddIcon boxSize={2} />
        </Button>
        <Button
        onClick = {fontMinus}
          colorScheme="blackAlpha"
          border={"none"}
          outline={"2px solid transparent"}
          ml={0}
          mt={0}          
          maxW={"24px"}
          maxH={"24px"}
          left={"0px"}
          top={"0px"}
          position="absolute"
          variant="outline"
        >
          <MinusIcon boxSize={2} />
        </Button>
      </ModalContent>
    </Modal>
  );
});
