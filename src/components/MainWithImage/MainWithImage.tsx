import { Grid, GridItem, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { NavigationButtons } from '../NavigationButtons/NavigationButtons';
import { baseStore } from '../../stores/Base/base.store';
import { observer } from 'mobx-react-lite';

interface Props {
    children: React.ReactNode,
}

export const MainWithImage:FC<Props> = observer(({children}) => {  
    return (
      <>
        <Grid templateColumns="25vw 75vw" templateRows=" 48px 1fr" gap={0}>
          <GridItem colSpan={1} rowSpan={2} bg="#F0F8FF">
            <Image minH={"100vh"} boxSize="100%" objectFit="cover" src={baseStore.imgSrc} alt="Witch" />
          </GridItem>
          <GridItem border={"5px double #1C6EA4"} colSpan={1} rowSpan={1} bg="#F0F8FF">
            <NavigationButtons />
          </GridItem>
          <GridItem border={"5px double #1C6EA4"} minH={"calc(100vh - 48px"} colSpan={1} rowSpan={1} bg="#F0F8FF">
            {children}
          </GridItem>          
        </Grid>
      </>
    );
  });

  //border: 5px double #1C6EA4;