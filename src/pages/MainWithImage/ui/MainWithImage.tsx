import { Grid, GridItem, Image } from "@chakra-ui/react";
import { FC } from "react";
import { baseStore } from "../../../stores/Base/base.store";
import { observer } from "mobx-react-lite";
import { NavigationTabs } from "../../../components/NavigationTabs.tsx/NavigationTabs";
import { Pages } from "../../../stores/Base/model/types";
import { ROUTE } from "../../../routes";
import { girlsInPossessionStore } from "../../../stores/girlsInPossession/girlsInPossession.store";
import { ActionModal } from "../../../components/ActionModal/ActionModal";

interface Props {
  children: React.ReactNode;
}

const tabs = [
  {
    id: Pages.lesson,
    pattern: ROUTE.LESSON.PATH,
    label: "Обучение",
    img: `${process.env.PUBLIC_URL}/girls/${girlsInPossessionStore.selectedGirl.id}/_normal.png`,
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
    img: `${process.env.PUBLIC_URL}/girls/${girlsInPossessionStore.selectedGirl.id}/_normal.png`,
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
          border={"5px double #1C6EA4"}
          colSpan={1}
          rowSpan={1}
          bg="#F0F8FF"
        >
          <NavigationTabs tabs={tabs} />
        </GridItem>
        <GridItem
          border={"5px double #1C6EA4"}
          minH={"calc(100vh - 48px"}
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

//border: 5px double #1C6EA4;
