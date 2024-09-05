import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import { NavigationTabs } from "../../../components/NavigationTabs.tsx/NavigationTabs";
import { Pages } from "../../../stores/Base/model/types";
import { ROUTE } from "../../../routes";
import { slaveStore } from "../../../stores/slave/slave.store";
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
    img: `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.normal}`,
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
    img: `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/_normal.png`,
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
      <Grid templateColumns="25vw 75vw" templateRows=" 48px 1fr" gap={0}>
        <GridItem colSpan={1} rowSpan={2} bg="#F0F8FF">
          <Image
            minH={"100vh"}
            boxSize="100%"
            objectFit="cover"
            src={baseStore.imgSrc}
            alt="Witch"
          />
        </GridItem>
        <GridItem
          display="flex"
          flexDir={"row"}
          justifyContent="space-between"
          border={"5px double #1C6EA4"}
          colSpan={1}
          rowSpan={1}
          bg="#F0F8FF"
        >
          <NavigationTabs tabs={tabs} />
          <Button
            onClick={dayEnd}
            _hover={{ background: "#000080" }}
            bg="#274487"
            color="#FFFFFF"
            alignSelf={"center"}
          >
            Закончить день
          </Button>
        </GridItem>
        <GridItem
          border={"5px double #1C6EA4"}
          colSpan={1}
          rowSpan={1}
          bg="#F0F8FF"
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