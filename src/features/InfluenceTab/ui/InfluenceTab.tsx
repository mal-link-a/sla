import { Button, Grid, Heading, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

export const InfluenceTab = observer(() => {
    
    return (
        <Grid templateColumns='repeat(3, 1fr)' alignItems={"start"} justifyContent={"space-around"}>
        <VStack border="1px solid #5CA415">
            <Heading as="h3" >Слова</Heading>
        <Button>Спросить</Button>
        <Button>Разговаривать</Button>
        </VStack>

        <VStack border="1px solid #5CA415">
            <Heading as="h3" >Поощрения</Heading>
        <Button>Похвалить</Button>
        <Button>Провести время вместе</Button>
        <Button>Провести время вместе</Button>
        <Button>Дать свободное время</Button>
        <Button>Эротическое поощрение</Button>
        <Button>Сделать подарок</Button>
        <Button>Подарить предмет одежды</Button>
        <Button>Угостить сладостями</Button>
        </VStack>

        <VStack border="1px solid #5CA415">
            <Heading as="h3" >Наказания</Heading>
        <Button>Отчитать</Button>
        <Button>Отобрать привилегии</Button>
        <Button>Временно ввести правила</Button>
        <Button>Флаггеляция</Button>
        <Button>Бондаж и депривация</Button>
        <Button>Наказание стыдом</Button>
        </VStack>

        

        


        border: 1px solid #5CA415;


        </Grid>
    )

})