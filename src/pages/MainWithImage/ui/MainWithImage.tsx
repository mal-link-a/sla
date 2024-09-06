import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import { NavigationTabs } from "../../../components/NavigationTabs.tsx/NavigationTabs";
import { Pages } from "../../../stores/Base/model/types";
import { ROUTE } from "../../../routes";
import { slaveStore } from "../../../stores/slave/model/slave.store";
import { ActionModal } from "../../../components/ActionModal/ActionModal";
import { dayEnd } from "../../../shared/generalEvents/dayEnd";
import { slaveImg } from "../../../entities/Girl/model/imgPath";
import { baseStore } from "../../../stores/Base/model/base.store";

interface Props {
  children: React.ReactNode;
}

const tabs = [
  {
    id: Pages.lesson,
    pattern: ROUTE.LESSON.PATH,
    label: "Обучение",
    img: `${process.env.PUBLIC_URL}/locations/class.png`,
  },
  {
    id: Pages.сustomerOrders,
    pattern: ROUTE.WORK.PATH,
    label: "Работа",
    img: `${process.env.PUBLIC_URL}/locations/work.png`,
  },
  {
    id: Pages.influence,
    pattern: ROUTE.INFLUENCE.PATH,
    label: "Воспитание",
    img: `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.normal}`,
  },
  {
    id: Pages.About,
    pattern: ROUTE.ABOUT.PATH,
    label: "О проекте",
    img: `${process.env.PUBLIC_URL}/other/universe.png`,
  },
];

export const MainWithImage: FC<Props> = observer(({ children }) => {
  //Модалка
  const [modalIsOpen, setModalData, modalImage, modalText] = [
    baseStore.modalIsOpen,
    baseStore.setModalData,
    baseStore.modalImage,
    baseStore.modalText,
  ];

  return (
    <>
      <Grid
        maxW={{ base: "90%", sm: "95%", md: "1200px" }}
        ml={{ base: "13px", md: "auto" }}
        mr="auto"
        templateColumns={{ base: "1fr", md: "25vw 1fr" }}
        justifyContent={"center"}
        alignItems={"center"}
        templateRows={{ base: "100px 1fr", sm: "50px 1fr" }}
        minH={"100vh"}
        maxH={"100vh"}
        gap={0}
      >
        <GridItem
          h={"100%"}
          display={{ base: "none", md: "block" }}
          colSpan={1}
          rowSpan={2}
          bg="#F0F8FF"
        >
          <Image
            boxSize="100%"
            objectFit="cover"
            src={baseStore.imgSrc}
            alt="Witch"
          />
        </GridItem>
        <GridItem>
          <NavigationTabs tabs={tabs} />
        </GridItem>
        <GridItem
          display="flex"
          flexDir={"column"}
          w="100%"
          h="100%"
          border={"8px double #C0C0C0"}
        >
          {children}
        </GridItem>
      </Grid>

      <ActionModal
        isOpen={modalIsOpen}
        onClose={() => setModalData(false)}
        img={modalImage}
        text={modalText}
      />
    </>
  );
});
